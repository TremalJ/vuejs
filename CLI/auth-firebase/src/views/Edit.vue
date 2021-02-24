<template>
  <div  class="card-header" >
      <h1>
          <form @submit.prevent="editarTarea(task)" class="form-group">
          <textarea  class="form-control form-control-sm" v-model="$v.task.nombre.$model" />
           <br><br>
          <button type="submit" class="btn btn-warning" :disabled="$v.task.$invalid" > Editar</button>
          </form>
          <small class="text-danger d-block" v-if="!$v.task.nombre.required">Campo requerido</small>
          <!-- <p>{{$v.task}}</p> -->
      </h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'Edit',
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
        ...mapState(['task'])
    },
    validations:{
        task: {  
            nombre:{ required}
         }
    }
}
</script>