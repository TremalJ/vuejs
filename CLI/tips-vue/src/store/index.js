import Vue from 'vue'
import Vuex from 'vuex'

import contador from '../modules/contador'
import tareas from '../modules/tareas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titulo: 'El paco'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  modules:{
        tareas,
        contador
  }
})
