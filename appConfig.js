/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-10-16 11:16:57
 * @modify date 2017-10-16 11:16:57
 * @desc [配置信息]
*/

const env = process.env.NODE_ENV

let componentName = 'vue-comp'
let gitDir = 'vue-comp'
let htmlTitle = 'vue-comp - dev'

if (env === 'production') { // 生产环境
  htmlTitle = 'vue-comp'
}

module.exports = {
  componentName,
  gitDir,
  htmlTitle,
}
