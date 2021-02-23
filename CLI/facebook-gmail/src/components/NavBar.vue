<template>
  <nav>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase" >
        <router-link :to="{name:'home'}"><span>Vue</span></router-link>
       
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion">
        <span>Cerrar sesión</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
  </v-app-bar>
  
  <v-navigation-drawer color="blue lighten-3" v-model="drawer" dark  app>

    <v-layout column align-center >
      <v-flex xs1>
        <v-avatar
          color="primary"
          size="56"
        >
        <img :src="usuario.foto" alt="avatar"/>
        </v-avatar>
      </v-flex>
    </v-layout> 
    <v-divider></v-divider> 
    <v-list>
      <v-list-item name="v-list-title" v-for="(item, index) in items" :key="index" class="m-5"
      :to="{name : item.to}" 
      >
        <v-list-item-action>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
    name: 'NavBar',
    data(){
      return{
        drawer:true,
        items: [
          { title: 'Dashboard', icon : 'fas fa-address-card', to: 'home'},
          // { title: 'Account', icon : 'fas fa-address-card',  to: 'ingreso'},
          { title: 'Admin', icon : 'fas fa-user-shield',  to: 'admin'},
          { title: 'Chat', icon : 'fas fa-comments',  to: 'chat'},
        ]
      }
    },
    methods:{
      ...mapActions(['cerrarSesion']),
    },
    computed:{
        ...mapState(['usuario'])
    }
  }
</script>
