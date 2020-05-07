/// <reference types="cypress" />
const rollupPreprocessor = require('../..')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // use default options
  on('file:preprocessor', rollupPreprocessor())
}
