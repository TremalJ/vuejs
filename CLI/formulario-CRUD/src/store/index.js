import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre:  '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    set(state, payload) {
      state.tareas.push(payload);
    },
    edit(state, payload) {
      if(!state.tareas.find(item => item.id === payload )) {
        router.push('/');
        return;
      }

      state.tarea = state.tareas.find(item => item.id === payload) ;
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item);
      router.push('/');
    },
    delete(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload);
    }
  },
  actions: {
    setTareas({ commit }, tarea){
      commit('set', tarea);
    },
    editTarea({ commit }, id){
      commit('edit', id);
    },
    updateTarea({ commit }, tarea){
      commit('update', tarea);
    },
    deleteTareas({ commit }, id){
      commit('delete', id);
    }
  },
  modules: {
  }
})
