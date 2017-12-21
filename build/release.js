'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'releasing'
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const releaseConfig = require('./webpack.release.conf')
const releaseMinConfig = require('./webpack.release.min.conf')

function buildUmd (config, version, cb) {
  var spinner = ora('building for ' + version + '...')
  spinner.start()
  webpack(config, function (err, stats) {
    if (err) throw err
    spinner.stop()
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  '+ version +' verison build complete.\n'))
    cb && cb()
  })
}

rm(path.join(__dirname, './dist'), err => {
  if (err) throw err
  buildUmd(releaseConfig, 'Releasing', function () {
    buildUmd(releaseMinConfig, 'Releasing minified')
  })
})
