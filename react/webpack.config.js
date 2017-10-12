const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',

  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  devServer: {
    host: 'localhost',
    port: 3000
  }
}
