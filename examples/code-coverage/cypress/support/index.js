// note about Rollup tree shaking:
// if we use an import to load code coverage support file
// then it gets totally removed from the output bundle
// import '@cypress/code-coverage/support'
// instead we will use CommonJS require to load the support module
require('@cypress/code-coverage/support')
