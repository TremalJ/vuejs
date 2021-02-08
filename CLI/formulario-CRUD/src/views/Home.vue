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
import { mapActions } from 'vuex'; //siempre importar con llaves IMPORTANTE!
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre:  '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario(){
      if(this.tarea.nombre.trim() === ''){
        console.log('nombre Vacío')
        return
      }

      this.tarea.id = shortid.generate()
      this.setTareas(this.tarea);

      this.tarea = {id: '', nombre: '', categoria: [], estado: '', numero: 0}
    }
  },
}
</script>