<template>
<div class="container">
  <h1>Paises API</h1>
  <Continentes />
  <CardList /> 
</div>
</template>

<script>
import CardList from './components/CardList'
import Continentes from './components/Continentes'
export default {
  name: 'App',
  components: {
    CardList,
    Continentes
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
