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
    cargar(state, payload) {
      state.tareas = payload;
    },
    set(state, payload) {
      state.tareas.push(payload);
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
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
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    delete(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload);
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    }
  },
  actions: {
    cargarLocalStorage({ commit }) {

    },
    async setTareas({ commit }, tarea){
      try {
        const res = await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        
        const dataDB = await res.json();
        console.log(dataDB);
      } catch (error) {
        console.log(error);
      }
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
