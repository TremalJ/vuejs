<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <titulo msg="Mi banco dinamico 2.0" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Titulo from './components/Titulo/Titulo.vue'

export default {
  name: 'App',
  components: {
    Titulo
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
  margin-top: 60px;
}
</style>
