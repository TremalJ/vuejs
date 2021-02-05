<template>
  <titulo texto="Ruta con parámetros" />
  <h2>Parámetros: {{$route.params.id}}</h2>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
  components: { Titulo },
}
</script>

<style>

</style>