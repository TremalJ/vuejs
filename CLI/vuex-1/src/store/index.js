import { createStore } from 'vuex'

export default createStore({
  state: { // objeto único que contiene el estado de aplicación:
    contador: 100,
  },
  mutations: { // Manejo del cambio de estados:
    incrementar(state) {
      state.contador = state.contador + 10
    }
  },
  actions: {
  },
  modules: {
  }
})
