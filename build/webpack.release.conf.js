'use strict'
const path = require('path')
const vueLoaderConfig = require('./vue-loader.conf')
const appConfig = require('../appConfig')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
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
