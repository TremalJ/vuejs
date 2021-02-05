import { createStore } from 'vuex'

export default createStore({
  state: { // objeto único que contiene el estado de aplicación:
    contador: 100,
  },
  mutations: { // Manejo del cambio de estados:
    incrementar(state) {
      state.contador = state.contador + 10
    },
    decrementar(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: { //ejecutan las mutaciones:
    accionIncrementar({commit}) {
      commit('incrementar')
    },
    accionDecrementar({commit}, numero) {
      commit('decrementar', numero)
    }
  },
  modules: {
  }
})
