<template>
  <v-container>
  <v-toolbar>
    <v-toolbar-side-icon @click="drawer != drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase" >
        <router-link :to="{name:'home'}"></router-link>
       <span>Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion">
        <span>Cerrar sesión</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer color="indigo lighten-3" v-model="drawer" app>

    <v-layout column align-center >
      <v-flex xs1>
        <v-avatar
          color="primary"
          size="56"
        >
        <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
        </v-avatar>
      </v-flex>
    </v-layout> 
    <v-divider></v-divider> 
    <v-list>
      <v-list-title v-for="(item, index) in items" :key="index" class="m-5"
      :to="item.to" 
      >
        <v-list-title-action>
          <vs-icon>
           <v-icon class="white--text" >{{item.icon}}</v-icon> 
          </vs-icon>
        </v-list-title-action>
        <v-list-title-content>
           <v-list-title class="white--text" >{{item.title}}</v-list-title>
        </v-list-title-content>
        <br>
      </v-list-title>
    </v-list>
    </v-navigation-drawer>
    
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'NavBar',
    data(){
      return{
        drawer:true,
        items: [
          { title: 'Dashboard', icon : 'fas fa-address-card', to: {name: 'home'}},
          { title: 'Account', icon : 'fas fa-address-card',  to: {name: 'ingreso'}},
          { title: 'Admin', icon : 'fas fa-address-card',  to: {name: 'home'}},
        ]
      }
    },
    methods:{
      ...mapActions(['cerrarSesion'])
    }
  }
</script>
