const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  devServer: {
    host: 'localhost',
    port: 3000
  }
}