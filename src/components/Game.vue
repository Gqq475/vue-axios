<template>
  <div class="game">
    <button class="btn" @click="step">来玩个游戏吧！！！！</button>
    <NewTable />
  </div>
</template>

<script>
import NewTable from './Table.vue' // 引入子组件
export default {
  name: 'game',
  components: { // 引入子组件
    NewTable
  },
  data () {
    return {
      // msg: 'Almost remember you are absolutely unique'
    }
  },
  methods: {
    step() {
      // 路由跳转
      this.$router.push({
        path: '/count',
        // '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        name: 'Count',
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
.btn {
  margin-bottom: 20px;
}
</style>
