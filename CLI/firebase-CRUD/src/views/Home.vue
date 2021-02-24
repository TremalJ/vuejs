<template>
  <h1>Formularios con VueJS</h1>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
    <hr>
    <p> 
      {{tarea}}
    </p>
  </form>
  <ListaTareas />
</template>

<script>
import Input from '../components/Input.vue'
import ListaTareas from '../components/ListaTareas.vue'
import { mapActions } from 'vuex'; //siempre importar con llaves IMPORTANTE!
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
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
    ...mapActions(['tareas', 'setTareas']),
    procesarFormulario(){
      if(this.tarea.nombre.trim() === ''){
        return
      }

      this.tarea.id = shortid.generate()
      this.setTareas(this.tarea);
      this.tarea = {id: '', nombre: '', categorias: [], estado: '', numero: 0}
    }
  },
}
</script>