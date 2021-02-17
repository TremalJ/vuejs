import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../../firebase'
import router from '../router'

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
        router.push('/');
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      });
    },
    loginUser({commit}, user){
      auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res)
        const userLogged = {
          email: res.user.email,
          uid: res.user.uid
        }
        commit('setUser', userLogged)
        router.push('/');
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      })
    },
    closeSession({commit}){
      auth.signOut()
      .then(() => {
        router.push('/login');
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
