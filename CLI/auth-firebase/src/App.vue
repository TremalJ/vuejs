<template>
  <div id="app">
    <div id="nav">
        <router-link to="/" v-if="existUser">Inicio</router-link> <span v-if="!existUser"> | </span>
        <!-- <router-link v-if="!existUser" to="/register">Registro</router-link><span v-if="!existUser"> | </span>  -->
        <!-- sangonera:tomaca -->
        <router-link v-if="!existUser" to="/login">Acceso</router-link><span v-if="!existUser"> | </span>
        <button class="btn btn-dark" @click="closeSession()"  v-if="existUser">Cerrar sesion</button>
        <div></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Start', 
  methods: {
      ...mapActions(['closeSession'])
    },
    computed:{
      ...mapGetters(['existUser'])
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
