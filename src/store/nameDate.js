import axios from 'axios'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'  // 定义type
const state = {
  name: ''   // 定义state
}
// 定义actions
const actions = {
  getData({ commit }) {
    axios.get('https://api.github.com/users/Gqq475')
    .then(res=>{
      console.log(res)
      commit(RECEIVE_PRODUCTS, { data: res.data.login })
    })
  }
}
// 处理type 对应的值
const mutations = {
  [RECEIVE_PRODUCTS] (state, { data }) {
    state.name = data
  }
}
export default {
  state,
  mutations,
  actions
}
