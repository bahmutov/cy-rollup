// https://rollupjs.org/guide/en/#quick-start
// https://rollupjs.org/guide/en/#using-config-files

// used to instrument source code to get code coverage
import istanbul from 'rollup-plugin-istanbul'

// plugins to use CommonJS from node_modules
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  plugins: [
    resolve(),
    commonjs(),
    istanbul({
      // only instrument app's source files
      include: ['src/**'],
    }),
  ],
}
