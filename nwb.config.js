module.exports = {
  type: 'react-component',
  npm: {
    cjs: true,
    esModules: true,
    umd: {
      global: 'Textures',
      externals: {
        'react': 'React',
        'prop-types': 'PropTypes',
        'react-dom': 'ReactDom'
      }
    },
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ['./src/index.ts'],
      }
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
      config.module.rules.push({
        'test': /\.tsx?$/,
        'loader': 'awesome-typescript-loader',
      })

      return config
    },
  },
}
