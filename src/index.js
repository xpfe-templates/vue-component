/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 04:06:39
 * @modify date 2017-08-30 07:54:02
 * @desc [入口文件]
*/

import vueComp from './vue-comp.vue'

const install = (Vue) => {
  Vue.component('vue-comp', vueComp)
}

export default {
  install,
}
export {
  vueComp,
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
