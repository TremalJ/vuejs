<template>
  <div  class="card-header" >
      <h1>

          <form @submit.prevent="editarTarea(tarea)" class="form-group">
          <textarea  class="form-control form-control-sm" type="text" v-model="tarea.nombre" />
           <br><br>
          <button type="submit" class="btn btn-warning"> <i class="fas fa-save fa-2x"></i> </button>
          </form>
      </h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Editar',
    data(){ // The function that returns a data object for the component instance. In data, we don't recommend to observe objects with their own stateful behavior like browser API objects and prototype properties. A good idea would be to have here just a plain object that represents component data.
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getTarea(this.id)
    },
    methods: {
        ...mapActions(['getTarea', 'editarTarea'])
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>

<style>

</style>