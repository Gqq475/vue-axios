<template>
  <div id="tabNav" class="tabs">
    <h2>Cnode 社区</h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in tabs"
        :label="item.value"
        :name="item.name"
      >
        <!-- 渲染各个列表 -->
        <ArticleItem v-bind:data="datalist"></ArticleItem>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import ArticleItem from './ArticleItem';
  export default {
    name: 'tabNav',
    components:{
        ArticleItem
    },
    data() {
      return {
        tabs: [{
          name: 'all',
          value: '全部'
        },{
          name: 'share',
          value: '分享'
        },{
          name: 'job',
          value: '招聘'
        },{
          name: 'ask',
          value: '问答'
        }],
        activeName: 'all',
        // datalist: this.$store.state.nameDate.cnodeDataList,
        page:1,
        limit:20
      };
    },
    mounted(){
      this.$store.dispatch("getCnodeDataList", this.activeName, this.page, this.limit)
    },
    methods: {
      handleClick(tab, event) {
        this.$store.dispatch("getCnodeDataList", this.activeName, this.page, this.limit)
      }
    },
    computed: mapState({
      datalist: ({nameDate}) => nameDate.cnodeDataList
    }), // 提取store中的数据
  }
</script>

<style scoped>
  .tabs{
    text-align: left;
  }
</style>
