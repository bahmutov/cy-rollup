# @bahmutov/cy-rollup [![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-4.5.0-brightgreen) ![rollup version](https://img.shields.io/badge/rollup-2.10.5-brightgreen)

Implementation copied from [bahmutov/rolling-task](https://github.com/bahmutov/rolling-task), used by [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)

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
[badges image]: https://github.com/bahmutov/cy-rollup/workflows/badges/badge.svg?branch=master
[badges url]: https://github.com/bahmutov/cy-rollup/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
