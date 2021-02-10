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
    },
    user:null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
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
    cerrarSesion({ commit }) {
      commit('setUser', null);
      router.push('/login');
    },
    async ingresarUsuario({ commit }, usuario) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAK4l04jqkpRiPBBNTXEamiymNwRMVlLA',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true,
          })
        })

        const userDB = await res.json();
        if(userDB.error) {
          return;
        }
        commit('setUser', userDB);
        router.push('/');
      } catch (error) {
        console.log(error)
      }
    },  
    async registrarUsuario({ commit }, usuario) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAK4l04jqkpRiPBBNTXEamiymNwRMVlLA',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true,
          })
        })
        const userDB = await res.json()
        if(userDB.error) {
          return;
        }
        commit('setUser', userDB);
        router.push('/');
      } catch (error) {
        console.log(error)
      }
    },
    async cargarTareas({ commit, state }) {
      try {
        const res = await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
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
    async setTareas({ commit, state }, tarea){
      console.log(state);
      try {
        const res = await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
    async updateTarea({ commit, state  }, tarea){
      try {
        const res = await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
    async deleteTareas({ commit, state  }, id){
      try {
        await fetch(`https://crud-udemy-fd599.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE',
        })

        commit('delete', id);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    usuarioAutenticado(state) {
      console.log(state.user)
      return !!state.user
    }
  },
  modules: {
  }
})
