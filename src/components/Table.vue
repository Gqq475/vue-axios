<template>
  <div>
    <!-- 下面是一个表格，用的是饿了么ui库 -->
  <el-table
    :data="nameDate.modelList"
    border
    style="width: 80%; margin: 0 auto">
    <el-table-column
      header-align="center"
      prop="id"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      header-align="center"
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      header-align="center"
      prop="status"
      label="地址">
    </el-table-column>
  </el-table>
  <h3>{{nameDate.name}}</h3>
  <!-- 用store中的值来渲染页面 -->
</div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data() {
      return {
      }
    },
    // 组件被创建以后调用。（vue生命周期）
    created: function() {
      console.log("创建之后")
      this.$store.dispatch("getData") //触发action 来获取数据。
      this.$store.dispatch("getList")
    },
    computed: mapState(["nameDate"]), // 提取store中的数据
  }
</script>
