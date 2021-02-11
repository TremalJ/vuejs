<template>
  <h1>App contador: {{contador}}</h1>
  <ContadorUno />
  <ContadorAccion />
  <contador-accion></contador-accion>
</template>

<script>
import { provide, ref } from 'vue';
import ContadorUno from './components/ContadorUno'
import ContadorAccion from './components/ContadorAccion'

export default {
  name: 'App',
  components: {
    ContadorUno,
    ContadorAccion
  },
  setup(){
    const contador = ref(0);

    provide('contador', contador)

    return {contador}
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
