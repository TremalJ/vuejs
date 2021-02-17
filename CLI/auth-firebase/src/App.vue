<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Inicio</router-link> | 
        <router-link to="/register">Registro</router-link> | 
        <router-link to="/login">Acceso</router-link> |
        <button class="btn btn-dark" @click="closeSession()">Cerrar sesion</button>
        <div></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Register from './views/Register'
export default {
  name: 'Start', 
  methods: {
      ...mapActions(['closeSession'])
    },
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
