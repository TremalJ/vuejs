import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import {firebase} from '../firebase'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll);

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user)
  if (user) {
    // User is signed in.
    console.log(user)
    store.dispatch('setUsuario', user)

    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  } else {
    // No user is signed in.
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
});
Vue.config.productionTip = false


