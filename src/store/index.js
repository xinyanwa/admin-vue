import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:[]
  },
  mutations: {
    setUserInfo(state,info){
      state.userInfo = info
    }
  },
  actions: {
    handleSetUserInfo(context,info){
      context.commit('setUserInfo',info)
    }
  },
  modules: {
  }
})
