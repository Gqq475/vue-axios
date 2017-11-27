import axios from 'axios'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'  // 定义type
export const MODEL_LIST = 'MODEL_LIST'  // 定义type
export const CNODE_DATA_LIST = 'CNODE_DATA_LIST'

const state = {
  name: '',   // 定义state
  modelList: [],
  cnodeDataList: [],
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
  },
  getCnodeDataList({ commit }, activeName, page, limit) {
    axios.get(`https://cnodejs.org/api/v1/topics/?tab=${activeName}&&page=${page}&&limit=${limit}`)
    .then(res=>{
      commit(CNODE_DATA_LIST, { data: res.data.data })
    })
  }
}
// 处理type 对应的值
const mutations = {
  [RECEIVE_PRODUCTS] (state, { data }) {
    state.name = data
  },
  [MODEL_LIST] (state, { data }) {
    state.modelList = data
  },
  [CNODE_DATA_LIST] (state, {data}) {
    state.cnodeDataList = data
  }
}
export default {
  state,
  mutations,
  actions
}
