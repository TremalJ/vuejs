<template>
  <form action="">
    <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese Nombre"
      v-model="texto"
    >
    <p> 
      {{texto.tarea}}
    </p>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tarea: {
        texto:  ''
      }
    }
  }
}
</script>
