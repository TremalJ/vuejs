import { createStore } from 'vuex'

export default createStore({
  state: { // objeto único que contiene el estado de aplicación:
    contador: 100,
  },
  mutations: { // Manejo del cambio de estados:
    incrementar(state, payload) {
      state.contador = state.contador + payload
    },
    decrementar(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: { //ejecutan las mutaciones:
    accionIncrementar({commit}) {
      commit('incrementar', 10)
    },
    accionDecrementar({commit}, numero) {
      commit('decrementar', numero)
    },
    accionBoton({commit}, objeto) {
      if(objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('decrementar', objeto.numero)
      }
    }
  },
  modules: {
  }
})
