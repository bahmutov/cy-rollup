/// <reference types="cypress" />
const rollup = require('rollup')
const loadConfigFile = require('rollup/dist/loadConfigFile')
const path = require('path')
const debug = require('debug')('@bahmutov/cy-rollup')

// bundled[filename] => promise
const bundled = {}

module.exports = (config = {}) => {
  debug('user config:', config)

  return (file) => {
    debug('cy-rollup for file %s', file.filePath)

    if (bundled[file.filePath]) {
      debug('already have bundle promise for file %s', file.filePath)
      return bundled[file.filePath]
    }

    const rollupFilename = path.resolve(process.cwd(), config.configFile || 'rollup.config.js')
    debug('reading rollup config %s', rollupFilename)
    const {options, warnings} = await loadConfigFile(rollupFilename)

    if (warnings.count) {
      console.log(`We currently have ${warnings.count} warnings`);
      // This prints all deferred warnings
      warnings.flush();
    }
    debug('rollup options %o', options)

    debug('preprocessor file %o', file)

    // do not deep clone options - it will break plugins
    const rollupOptions = options[0]
    rollupOptions.input = file.filePath

    const outputOptions = {
      format: 'iife',
      sourcemap: 'inline',
      file: file.outputPath,
      name: path.basename(file.filePath)
    }

    if (file.shouldWatch) {
      const watchOptions = {
        ...rollupOptions,
        output: outputOptions
      }

      bundled[file.filePath] = new Promise((resolve, reject) => {
        const watcher = rollup.watch(watchOptions)

        file.on('close', () => {
          debug('file %s close', file.filePath)
          watcher.close()
          delete bundled[file.filePath]
        })

        watcher.on('event', (e) => {
          debug('rollup watcher %s for file %s', e.code, file.filePath)
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
}
