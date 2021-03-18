# @bahmutov/cy-rollup [![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-6.8.0-brightgreen) ![rollup version](https://img.shields.io/badge/rollup-2.41.5-brightgreen)

Implementation copied from [bahmutov/rolling-task](https://github.com/bahmutov/rolling-task), used by [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)

## Install

```
npm install @bahmutov/cy-rollup --save-dev
```

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
    configFile: 'cypress/rollup-test.config.js',
  }

  on('file:preprocessor', rollupPreprocessor(options))
}
```

## Code coverage

You can instrument the application's code and generate coverage reports using [@cypress/code-coverage](https://github.com/cypress-io/code-coverage) plugin. See the full example in the [examples/code-coverage](examples/code-coverage) folder.

## Debugging

Run with environment variable

```
DEBUG=@bahmutov/cy-rollup
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2020

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cy-rollup/issues) on Github

## MIT License

Copyright (c) 2020 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ci image]: https://github.com/bahmutov/cy-rollup/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/cy-rollup/actions
[badges image]: https://github.com/bahmutov/cy-rollup/workflows/badges/badge.svg?branch=master
[badges url]: https://github.com/bahmutov/cy-rollup/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
