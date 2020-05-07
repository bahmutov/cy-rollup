# @bahmutov/cy-rollup [![ci status][ci image]][ci url]

Implementation copied from [bahmutov/rolling-task](https://github.com/bahmutov/rolling-task)

## Use

```js
// cypress/plugins/index.js

const rollupPreprocessor = require('@bahmutov/cy-rollup')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const options = {
    // Provide an alternative rollup config file.
    // The default is rollup.config.js at the project root.
    configFile: "cypress/rollup-test.config.js"
  }

  on('file:preprocessor', rollupPreprocessor(options))
}
```

## Debugging

Run with environment variable

```
DEBUG=@bahmutov/cy-rollup
```

[ci image]: https://github.com/bahmutov/cy-rollup/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cy-rollup/actions
