<template lang="html">
  <div id="container">
    <img src="../assets/chuifengji.jpg">
    <span>吹风机</span>
    <button type="button" @click="dialogVisible=true">加入购物车</button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一个吹风机</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style scoped lang="css" >
  #container {
    margin: 0 auto;
    width: 300px;
    height: auto;
    border: 1px solid #ccc;
  }
  img {
    width: 100px;
    height: 100px;
  }
</style>
