'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const releaseConfig = require('./webpack.release.conf')

module.exports = merge(releaseConfig, {
  output: {
    filename: './dist/[name].min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: false,
        warnings: false
      },
      sourceMap: false
    })
  ]
})
