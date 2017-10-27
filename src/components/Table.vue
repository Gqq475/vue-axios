<template>
  <div>
    <!-- 下面是一个表格，用的是饿了么ui库，
    绑定的数据直接在下面写死的。 -->
  <el-table
    :data="tableData"
    border
    style="width: 80%; margin: 0 auto">
    <el-table-column
      header-align="center"
      prop="date"
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
      prop="address"
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    // 组件被创建以后调用。（vue生命周期）
    created: function() {
      console.log("创建之后")
      this.$store.dispatch("getData") //触发action 来获取数据。
    },
    computed: mapState(["nameDate"]), // 提取store中的数据
  }
</script>
