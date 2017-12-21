<template>
<span class="vue-comp">{{ dotText }}</span>
</template>

<script>
export default {
  name: 'vue-comp',
  data () {
    return {
      timer: null,
      count: 0, // 计数
      dot: '.', // 显示的...
    }
  },
  computed: {
    dotText () {
      let count = this.count % 3 + 1
      return Array(count).fill('.').join('')
    },
  },

  mounted () {
    this.timer = setInterval(() => {
      this.count++
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
}
</script>
