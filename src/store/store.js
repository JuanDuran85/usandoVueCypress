import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    enviandoUser(state){
      return state.user
    }
  },
  mutations: {
    mutandoUsuario(state,uid){
      state.user = uid;
    }
  },
  actions: {
    usuarioActual({commit},uid){
      commit('mutandoUsuario', uid);
    }
  },
})
