const state = {
  num: 0
}
const mutations = {
  add (state) {
    state.num++
  },
  reduces (state) {
    if (state.num === 0) {
      return
    }
    state.num--
  }
}
export default {
  state,
  mutations
}
