<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
    <hr>
    <p> 
      {{tarea}}
    </p>
  </form>
</template>

<script>
import Input from '../components/Input.vue'
export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      tarea: {
        nombre:  '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods:  {
    procesarFormulario() {
      if(this.tarea.nombre.trim() === "") {
        this.desactivado = true;
        return;
      }
      this.desactivado = false;
      //Limpieza de campos rápida:
      this.tarea = {
        id: '',
        nombre:  '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
}
</script>