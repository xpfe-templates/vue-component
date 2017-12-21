const path = require('path')
const ghpages = require('gh-pages')
const chalk = require('chalk')

ghpages.publish(path.join(__dirname, '../demo-dist'), err => {
  if (err) {
    throw err
  } else {
    console.log(chalk.cyan('  Demo page has published to github.\n'))
  }
})
