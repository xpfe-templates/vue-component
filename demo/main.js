/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-08-24 04:09:41
 * @modify date 2017-08-24 04:09:41
 * @desc [demo入口文件]
*/

import Vue from 'vue/dist/vue.min.js'
import App from './App.vue'

Vue.config.productionTip = false // 取消启动时的提示

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})
