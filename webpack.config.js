const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/app.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
          ],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  output: {
    path: `${__dirname}/src/`,
    filename: 'app.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
}
