<template>
<div id="app">
  <vue-component class="app-comp" v-model="count">
    <span>我是组件</span>
  </vue-component>
</div>
</template>

<script>
import VueComponent from '@/vue-component'

export default {
  components: { VueComponent },
  data () {
    return {
      count: 34,
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.app-comp {
  margin: 200px;
}
</style>
