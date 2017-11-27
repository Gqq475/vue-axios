<template>
  <div class="article">
    <ul v-for="item in data">
        <li class="item clearfix">
            <span class="tab" v-if="item.tab === 'share'">分享</span>
            <span class="tab" v-else-if="item.tab === 'all'">全部</span>
            <span class="tab" v-else-if="item.tab === 'job'">招聘</span>
            <span class="tab" v-else-if="item.tab === 'ask'">问答</span>
            <router-link :to="{path: `/topic/${item.id}`}" class="title">{{ item.title}}</router-link>
            <span class="read_count"><i class='reply_count'>{{ item.reply_count }}</i class='visit_count'> / <i>{{ item.visit_count }}</i></span>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "article",
    props:["data"],
    data(){
        return{
        }
    },
    mounted(){
    }
}
</script>
<style>

  li.item{
      position: relative;
      list-style: none;
      padding:10px 4px;
      border-bottom: 1px solid #eee;
      vertical-align: middle;
  }
  li i{
      font-style: normal;
      color:#727272;
  }
  .tab{
      display:inline-block;
      padding:4px 6px;
      border-radius: 4px;
      background:green;
      color:#fff;
      font-size: 14px;
  }
  .read_count{
      float: right;
      margin:4px 0 0 0;
  }
  .title{
      display:inline-block;
      width:55%;
      color:#727272;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: break-word;
  }

</style>
