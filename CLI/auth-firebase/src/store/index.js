import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    tasks: [],
    task: {nombre: '', id: ''},
    carga: true,
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
    },
    setError (state, payload) {
      state.error = payload;
    },
    setTasks (state, payload) {
      state.tasks = payload;
    },
    setTask(state, payload){
      state.task = payload;
    },
    setDeleteTask(state, payload){
      state.tasks = state.tasks.filter(item => item.id !== payload);
    },
    cargarFirebase(state, payload){
      state.carga = payload
    }
  },
  actions: {
    getTareas({ commit, state}){

      commit('cargarFirebase', true);

      const tareas = [];
      db.collection(state.user.email).get()
      .then(res => {
        res.forEach(element => {
          let tarea = element.data();
          tarea.id = element.id;
          tareas.push(tarea);
          // setTimeout(() => {
          //   commit('cargarFirebase', false);
          // }, 2000)
          commit('cargarFirebase', false);
        });        
      })  
      commit('setTasks', tareas);     
    },
    getTarea({commit, state}, idTarea) {
      db.collection(state.user.email).doc(idTarea).get()
      .then(res => {
        let tarea = res.data();
        tarea.id = res.id;
        console.log(tarea)
        commit('setTask', tarea);
      })
    },
    agregarTarea({commit, state}, nombreTarea) {
      db.collection(state.user.email).add({
        nombre: nombreTarea
      })
      .then(res => {
        console.log(nombreTarea)
        commit('setTask', nombreTarea)
        router.push('/');
      })
    },
    editarTarea({commit, state}, tarea) {
      db.collection(state.user.email).doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(() => {
        console.log('tarea editada')
        router.push('/');
      })
    },
    eliminarTarea({commit, state} , idTarea) {
      console.log(idTarea)
      try {
        db.collection(state.user.email).doc(idTarea).delete()
        .then(() => {
          commit('setDeleteTask', idTarea)
        })
      } catch (error) {
        console.log(error)
      }
    },
    createUser({commit}, user){
      auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const userCreated = {
          email: res.user.email,
          password: res.user.password,
          uid: res.user.uid
        }
        db.collection(res.user.email).add({
          nombre: 'tarea de ejemplo'
        }).then(doc => {
          commit('setUser', userCreated)
          router.push('/');
        })
        .catch(error => {
          console.log(error)
        });
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      });
    },
    loginUser({commit}, user){
      auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const userLogged = {
          email: res.user.email,
          uid: res.user.uid
        }
        commit('setUser', userLogged)
        router.push('/');
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      })
    },
    closeSession({commit}){
      auth.signOut()
      .then(() => {
        router.push('/login');
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      });
    },
    checkUser({commit}, user) {
      commit('setUser',user)
    },
  },
  getters:{
    existUser(state) { 
      if(!state.user) {
        console.log("no hay usuario")
        return false
      } else{
        console.log("EXISTE usuario")
        return true;
      }
    }
  },
  modules: {
  }
})
