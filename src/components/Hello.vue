<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="step">点击按钮跳转页面喽</button>
    <p>我是父组件中的一个变量，传给子组件中的input。</p>
    <p>子组件输入的值变化了以后我的值也就变了。</p>
    <p>Message is: {{ message }}</p>
    <!-- 父组件向子组件传值时，要在子组件入口的地方绑定需要传值的是数据，
    格式为(: => v-bind:, data => 传值的属性名， 'message' =>传递的值) -->
    <HelloChild v-model="message" />
  </div>
</template>

<script>
import HelloChild from './HelloChild.vue' // 引入子组件
export default {
  components: { // 引入子组件
    HelloChild
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '222'
    }
  },
  methods: {
    // inputData(data) {
    //   this.message = data
    // },
    step () {
      // 路由跳转
      this.$router.push({
        path: '/demo',
        // '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        name: 'Demo',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>


body .bod .content .title button .btn1 {}
