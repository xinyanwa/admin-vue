import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:[],
    routeInfo:''
  },
  mutations: {
    setUserInfo(state,info){
      state.userInfo = info
    },
    setRouteInfo(state,info){
      state.routeInfo = info
    }
  },
  actions: {
    handleSetUserInfo(context,info){
      context.commit('setUserInfo',info)
    },
    handleSetRouteInfo(context,info){
      context.commit('setRouteInfo',info)
    }
  },
  modules: {
  }
})
