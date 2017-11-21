/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 04:06:39
 * @modify date 2017-08-30 07:54:02
 * @desc [入口文件]
*/

import vueDot from './vue-dot.vue'

const install = (Vue) => {
  Vue.component('vue-dot', vueDot)
}

export default {
  install,
}
export {
  vueDot,
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
