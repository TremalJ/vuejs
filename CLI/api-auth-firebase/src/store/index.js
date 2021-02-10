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
    async cargarTareas({ commit }) {
      try {
        const res = await fetch('https://crud-udemy-fd599.firebaseio.com//tareas.json')
        const dataDB = await res.json()
        const arrayTareas = []
        for (let id in dataDB){
          arrayTareas.push(dataDB[id])
        }
        commit('cargar', arrayTareas)

      } catch (error) {
        console.log(error)
      }
    },
    async setTareas({ commit }, tarea){
      try {
        const res = await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT', //PUT en lugar de POST, para no crear id de Firebase cada vez y usar ID de TAREA
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        
        const dataDB = await res.json()
        commit('set', tarea);
      } catch (error) {
        console.log(error);
      }
    },
    editTarea({ commit }, id){
      commit('edit', id);
    },
    async updateTarea({ commit }, tarea){
      try {
        const res = await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = res.json();
        commit('update', dataDB);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTareas({ commit }, id){
      try {
        await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${id}.json`, {
          method: 'DELETE',
        })

        commit('delete', id);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
