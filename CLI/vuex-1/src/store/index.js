import { createStore } from 'vuex'

export default createStore({
  state: { // objeto único que contiene el estado de aplicación:
    contador: 100,
  },
  mutations: { // Manejo del cambio de estados:
    incrementar(state) {
      state.contador = state.contador + 10
    },
    decrementar(state) {
      state.contador = state.contador - 10
    }
  },
  actions: { //ejecutan las mutaciones:
    accionIncrementar({commit}) {
      commit('incrementar')
    },
    accionDecrementar({commit}) {
      commit('decrementar')
    }
  },
  modules: {
  }
})
