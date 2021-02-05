<template>
  <div  class='id'>{{blogArticle.id}}</div>
  <div class='title'>{{blogArticle.title}}</div>
  <div class='body'>{{blogArticle.body}}</div>
  <!-- <h2>Parámetros: {{$route.params.id}}</h2> -->
  <router-link to="/blog">Volver a Página principal</router-link>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    props: {
    id: String
  },
  components: { Titulo },
  data() {
    return {
      blogArticle: []
    }
  },
  methods: {
    async consumirArticulo() {
      try{
        // const data = await fetch('https://jsonplaceholder.typicode.com/posts/'${this.$route.params.id})
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
        this.blogArticle = await data.json();
      } catch(error){
        console.log(error);
      }
    }
  },
  created() {
    this.consumirArticulo();
  }
}
</script>

<style>
    .id {
        margin-bottom: 20px;
    }
    .title {
        font-weight:bold;
        margin-bottom: 20px;
    }
    .body {
        text-align: justify;
        margin-bottom: 20px;
    }
</style>