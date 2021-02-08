<template>
  <form action="">
    <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese Nombre"
      v-model="tarea.texto"
    >

    <div clas="form-check form-check-inline">
      <input 
      type="checkbox" 
      name="form-check-input" 
      id="check-1"
      v-model="tarea.categorias"
      value="javascript"
      >
      <label for="check-1" class="form-check-input">Javascript</label>
    </div>

    <div clas="form-check form-check-inline">
      <input 
      type="checkbox" 
      name="form-check-input" 
      id="check-2"
      v-model="tarea.categorias"
      value="nodejs"
      >
      <label for="check-2" class="form-check-input">NodeJS</label>
    </div>
    <hr>
    <p> 
      {{tarea}}
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
        nombre:  '',
        categorias: []
      }
    }
  }
}
</script>
