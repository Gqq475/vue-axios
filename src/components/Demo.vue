<template>
  <div class="demoTest">
    <h1>最近学到的一句英语：</h1>
    <h2>{{ msg }}</h2>
    <button @click="sendParams">传递</button>
  </div>
</template>

<script>
export default {
  name: 'demoTest',
  data () {
    return {
      msg: 'Almost remember you are absolutely unique'
    }
  },
  methods: {
    sendParams () {
      // 路由跳转
      this.$router.push({
        path: '/game',
        // '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        name: 'Game',

        // params和 query 是跳转传值。
        params: {
          name: 'name',
          dataObj: this.msg
        }
        /* query: {
            name: 'name',
            dataObj: this.msg
        } */
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

</style>
