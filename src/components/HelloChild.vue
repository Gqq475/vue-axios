<template>
  <div class="child">
    <h2>我是hello vue的子组件哦！！！{{message}}</h2>
    <input
      ref="input"
      v-bind:value="value"
      placeholder="edit me"
      v-on:input="updateValue($event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'child',
  props: ['value'],
  data () {
    return {
      message: '' // 定义一个变量 来对input框中的值进行操作
    }
  },
  methods: {
    updateValue: function (value) {
      this.message = value
      this.message.trim() // 去掉两边的空格
      // 如果值尚不合规，则手动覆盖为合规的值
      if (this.message !== value) {
        this.$refs.input.value = this.message
      }
      this.$emit('input', this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 0 auto;
  border: 1px solid red;
  width: 50%;
  height: 500px;
}
h1, h2 {
  font-weight: normal;
}

</style>
