import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from '../../firebase'
import router from '../router'

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
      console.log(payload.displayName)
      const usuario = {
          nombre: payload.displayName,
          email: payload.email,
          uid:payload.uid,
          foto: payload.photoURL
      }

    commit('nuevoUsuario',usuario)
    },
    cerrarSesion({commit}, payload){
      auth.signOut();
      commit('nuevoUsuario',null)
      router.push({name: 'ingreso'})
    } 
  },
  modules: {
  }
})
