import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {auth} from '../firebase.js'

import Vuelidate from 'vuelidate';

Vue.config.productionTip = false

Vue.use(Vuelidate)

auth.onAuthStateChanged(user => {
  if(user){
    const userChecked = {
      email: user.email,
      uid: user.uid,
    }
    store.dispatch('checkUser', userChecked)
  }else {
    store.dispatch('checkUser', user)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


