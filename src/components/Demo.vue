<template>
  <div class="demoTest">
    <h1>最近学到的一句英语：</h1>
    <h2>{{ msg }}</h2>
    <button @click="sendParams">传递</button>
    <el-row class="tac">
      <el-col :span="4">
        <h5>默认颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
