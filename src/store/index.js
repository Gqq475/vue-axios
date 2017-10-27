import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'
import nameDate from './nameDate'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    counter, //引入定义的每部分的文件。
    nameDate,
  }
})
