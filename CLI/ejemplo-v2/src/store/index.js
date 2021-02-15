import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'

Vue.use(Vuex)
export default new Vuex.Store({
  state: { //A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.
    tareas: [],
    tarea: {nombre: '', id: ''}
  },
  mutations: { // The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very similar to events: each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive the state as the first argument
    setTareas(state, payload){
      state.tareas = payload;
    },
    setTarea(state, payload){
      state.tarea = payload;
    },
    setEliminarTarea(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload);
      console.log(state.tareas)
    }
  },
  actions: { // Instead of mutating the state, actions commit mutations.
    //Actions can contain arbitrary asynchronous operations.
    getTareas({ commit}){
      const tareas = [];
      db.collection('tareas').get()
      .then(res => {
        res.forEach(element => {
          let tarea = element.data();
          tarea.id = element.id;
          tareas.push(tarea);
        });
        commit('setTareas', tareas);
      })       
    },
    getTarea({commit}, idTarea) {
      db.collection('tareas').doc(idTarea).get()
      .then(res => {
        let tarea = res.data();
        tarea.id = res.id;
        console.log(tarea)
        commit('setTarea', tarea);
      })
    },
    editarTarea({commit}, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(() => {
        console.log('tarea editada')
        router.push('/');
      })
    },
    agregarTarea({commit}, nombreTarea) {
      db.collection('tareas').add({
        nombre: nombreTarea
      })
      .then(res => {
        router.push('/');
      })
    },
    eliminarTarea({commit} , idTarea) {
      console.log(idTarea)
      try {
        db.collection('tareas').doc(idTarea).delete()
        .then(res => {
          commit('setEliminarTarea', idTarea)
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
