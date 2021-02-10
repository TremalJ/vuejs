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
    error: {
      tipo:null,
      mensaje:null,
    },
  },
  mutations: {
    setError(state, payload) {
      if(payload === null) {
        return state.error = null;
      }
      if(payload === "EMAIL_NOT_FOUND") {
        return state.error = {tipo: 'email', mensaje: 'Email no registrado'}
      }
      if(payload === "INVALID_EMAIL") {
        return state.error = {tipo: 'email', mensaje: 'El email tiene un formato incorrecto'}
      }
      if(payload === "INVALID_PASSWORD") {
        return state.error = {tipo: 'password', mensaje: 'Contraseña incorrecta'}
      }
    },
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
      localStorage.removeItem('usuario');
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
          return commit('setError', userDB.error.message);
        }
        commit('setError', null);
        commit('setUser', userDB);
        router.push('/');
        localStorage.setItem('usuario', JSON.stringify(userDB));
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
          console.log(userDB.error)
          return commit('setError', userDB.error.message);
        }
        commit('setUser', userDB);
        commit('setError', null);
        router.push('/');
      } catch (error) {
        console.log(error)
      }
    },
    async cargarTareas({ commit, state }) {
      if(localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      } else {
        return commit('setUser', null)
      }
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
      return !!state.user
    }
  },
  modules: {
  }
})
