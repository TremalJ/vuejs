import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    setPaisesFiltrados(state, payload) {

    }
  },
  actions: {
    async getPaises({ commit }){
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json();
        commit('setPaises', data);
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    topPaisesPoblacion(state) {
      return state.paises.sort((a, b) => 
        a.population < b.population ? 1 : -1
      )
    }
  },
  modules: {
  }
})
