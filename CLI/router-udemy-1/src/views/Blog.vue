<template>
  <Titulo texto="Título de mi blog" />
  <button @click="consumirApi">Consumir API</button>
</template>

<script>
import Titulo from '../components/Titulo.vue'

export default {
  components: { Titulo },
  data() {
    return {
      arrayBlog: []
    }
  },
  methods: {
    async consumirApi() {
      try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const array = await data.json();
        console.log(array);
      } catch(error){
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>