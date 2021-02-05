<template>
  <Titulo texto="Título de mi blog" />
  <!-- <button @click="consumirApi">Consumir API</button> -->
  <div v-for="user in arrayBlog" :key="user.id"> 
    {{user.id}} - {{user.title}}
  </div>
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
        this.arrayBlog = await data.json();
        console.log(this.arrayBlog);
      } catch(error){
        console.log(error);
      }
    }
  },
  created() {
    this.consumirApi();
  }
}
</script>

<style>

</style>