/// <reference types="cypress" />
const rollup = require('rollup')
const loadConfigFile = require('rollup/dist/loadConfigFile')
const path = require('path')

function deepClone(x) {
  return JSON.parse(JSON.stringify(x))
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (file) => {
  const rollupFilename = path.resolve(process.cwd(), 'rollup.config.js')
  const {options, warnings} = await loadConfigFile(rollupFilename)

  if (warnings.count) {
    console.log(`We currently have ${warnings.count} warnings`);
    // This prints all deferred warnings
    warnings.flush();
  }
  // bundled[filename] => promise
  const bundled = {}

  console.log('preprocessor file %o', file)

  if (bundled[file.filePath]) {
    console.log('already have bundle promise for file %s', file.filePath)
    return bundled[file.filePath]
  }

  const rollupOptions = deepClone(options[0])
  rollupOptions.input = file.filePath

  const outputOptions = {
    format: 'iife',
    sourcemap: 'inline',
    file: file.outputPath
  }

  if (file.shouldWatch) {
    const watchOptions = {
      ...rollupOptions,
      output: outputOptions
    }
    const watcher = rollup.watch(watchOptions)

    file.on('close', () => {
      console.log('file %s close', file.filePath)
      watcher.close()
      delete bundled[file.filePath]
    })

    bundled[file.filePath] = new Promise((resolve, reject) => {
      watcher.on('event', (e) => {
        console.log('rollup watcher %s for file %s', e.code, file.filePath)
        if (e.code === 'END') {
          resolve(file.outputPath)
          file.emit('rerun')
          return
        }

        if (e.code === 'ERROR') {
          console.error(e)
          reject(e)
        }
      })
    })

    await bundled[file.filePath]
    return file.outputPath
  }

  const bundle = await rollup.rollup(rollupOptions);
  bundled[file.filePath] = bundle.write(outputOptions)
  await bundled[file.filePath]
  return file.outputPath
}
