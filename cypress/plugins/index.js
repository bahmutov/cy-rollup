/// <reference types="cypress" />
const rollup = require('rollup')
const loadConfigFile = require('rollup/dist/loadConfigFile')
const path = require('path')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (on, config) => {
  const rollupFilename = path.resolve(process.cwd(), 'rollup.config.js')
  const {options, warnings} = await loadConfigFile(rollupFilename)

  if (warnings.count) {
    console.log(`We currently have ${warnings.count} warnings`);
    // This prints all deferred warnings
    warnings.flush();
  }

  const rollupOptions = options[0]

  // console.log('rollup options')
  // console.log(options)
  // console.log('output options', options[0].output)

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', async (file) => {
    console.log('preprocessor file %o', file)

    rollupOptions.input = file.filePath
    const bundle = await rollup.rollup(rollupOptions);

    const outputOptions = {
      format: 'iife',
      sourcemap: 'inline',
      file: file.outputPath
    }
    await bundle.write(outputOptions)
    return file.outputPath
  })
}
