import axios from 'axios'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'  // 定义type
export const MODEL_LIST = 'MODEL_LIST'  // 定义type
const state = {
  name: '',   // 定义state
  modelList: []
}
// 定义actions
const actions = {
  getData({ commit }) {
    axios.get('https://api.github.com/users/Gqq475')
    .then(res=>{
      console.log(res)
      commit(RECEIVE_PRODUCTS, { data: res.data.login })
    })
  },
  getList({ commit }) {
    axios.get('http://172.22.40.161:5005/models')
    .then(res=>{
      commit(MODEL_LIST, { data: res.data.result })
    })
  }
}
// 处理type 对应的值
const mutations = {
  [RECEIVE_PRODUCTS] (state, { data }) {
    state.name = data
  },
  [MODEL_LIST] (state, { data }) {
    console.log('data', data)
    state.modelList = data
  },
}
export default {
  state,
  mutations,
  actions
}
