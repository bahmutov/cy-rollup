// https://rollupjs.org/guide/en/#quick-start
// https://rollupjs.org/guide/en/#using-config-files
import istanbul from 'rollup-plugin-istanbul'

export default {
  input: 'src/main.js',
  plugins: [
    istanbul({
      // only instrument app's source files
      include: ['src/**'],
    }),
  ],
}
