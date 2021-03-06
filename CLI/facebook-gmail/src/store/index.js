import Vue from 'vue'
import Vuex from 'vuex'

import {auth, db} from '../../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    mensaje: ''
  },
  mutations: {
    nuevoUsuario(state, payload) {
      state.usuario = payload;
      if(payload === null){
        state.usuario = ''
      }else {
        state.usuario = payload
      }
    },
    nuevoMensaje(state, payload) {
        state.mensaje = payload;
    }
  },
  actions: {
    async setUsuario({commit}, payload){
      console.log(payload.displayName)

      const doc = db.collection('usuarios').doc(payload.uid).get()
      .then(function(doc){
        if(doc.exists)  {
          console.log(doc.data());
            commit('nuevoUsuario', doc.data())
        } else {
          const usuario = {
              nombre: payload.displayName,
              email: payload.email,
              uid:payload.uid,
              foto: payload.photoURL
          }
  
          console.log("usuario nuevo:"+usuario.foto);
  
          db.collection('usuarios').doc(usuario.uid).set(
              usuario
          ).then(res =>
           {
             console.log(res)
           }
          ).catch(error => {
            console.log(error);
          })

          console.log("Usuario guardado en DB")
          commit('nuevoUsuario',usuario)
        }
      })      
    },
    cerrarSesion({commit}){
      auth.signOut();
      commit('nuevoUsuario',null)
      router.push({name: 'ingreso'})
    } ,
    setMensaje({commit}, payload) {
      db.collection('chat').add(
        payload
      );

      commit('nuevoMensaje',payload.mensaje)
    }
  },
  modules: {
  }
})
