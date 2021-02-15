import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: []
  },
  mutations: {
  },
  actions: {
    getTareas({ commit}){
      db.collection('tareas').get()
      .then(res => {
        res.forEach(element => {
          console.log(element.id)
          console.log(element.data())
        });
      })       
    }
  },
  modules: {
  }
})
