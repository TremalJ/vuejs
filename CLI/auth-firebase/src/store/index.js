import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
  },
  mutations: {
    setUser (state, payload) {
      state.usuario = payload;
      console.log(state.usuario)
    },
    setError (state, payload) {
      state.error = payload;
    },
  },
  actions: {
    createUser({commit}, user){
      auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res)
        const userCreated = {
          email: res.user.email,
          password: res.user.password,
          uid: res.user.uid
        }
        commit('setUser', userCreated)
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      });
    }
  },
  modules: {
  }
})
