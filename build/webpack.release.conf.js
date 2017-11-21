/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 03:59:25
 * @modify date 2017-08-24 03:59:25
 * @desc [description]
*/

var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')
var appConfig = require('../appConfig')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  entry: {},
  output: {
    filename: './dist/[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      }
    ]
  }
}

config.entry[appConfig.componentName] = './src/index.js'
config.output.library = appConfig.componentName

module.exports = config
