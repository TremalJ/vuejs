<template>
  <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
      <p class="m-0" :class= "{'tachado' : tarea.estado}">{{tarea.texto}}</p>
      <div>
          <i class="fas fa-undo-alt mx-2 text-success" role="button"
          v-if="tarea.estado"
          @click="modificar(tarea.id)"
          ></i>
          <i class="fas fa-check-circle mx-2 text-success" role="button"
          v-else
          @click="modificar(tarea.id)"
          ></i>
          <i class="fas fa-minus-circle mx-2 text-danger" role="button"
          @click="eliminar(tarea.id)"
          ></i>
          <i></i>
      </div>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
    props:{
        tarea: Object,
        required: false,
    },
    setup(){
        const tareas = inject('tareas');

        const modificar = id => {
            tareas.value = tareas.value.map(item => {
                if(item.id === id) {
                    item.estado = !item.estado
                }
                return item;
            })
        }

        const eliminar = id => {
            tareas.value = tareas.value.filter(item => item.id !== id )
        }

        return { modificar, eliminar }
    }
}
</script>

<style>
.tachado {
    text-decoration: line-through;
}
</style>