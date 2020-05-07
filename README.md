# @bahmutov/cy-rollup

Implementation copied from [bahmutov/rolling-task](https://github.com/bahmutov/rolling-task)

## Use

```js
// cypress/plugins/index.js
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('file:preprocessor', require('@bahmutov/cy-rollup'))
}
```
