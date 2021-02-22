import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    nuevoUsuario(state, payload) {
      state.usuario = payload;
    }
  },
  actions: {
    setUsuario({commit}, payload){
      const usuario = {
          nombre: user.displayName,
          email: user.email,
          uid:user.uid,
          foto: user.photoURL
      }
      
    commit('nuevoUsuario',usuario)
    }
  },
  modules: {
  }
})
