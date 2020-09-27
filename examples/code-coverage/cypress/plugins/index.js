/// <reference types="cypress" />
const rollupPreprocessor = require('@bahmutov/cy-rollup')
const codeCoverageTasks = require('@cypress/code-coverage/task')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('file:preprocessor', rollupPreprocessor())

  codeCoverageTasks(on, config)

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
