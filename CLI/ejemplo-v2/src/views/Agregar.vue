<template>
    <div  class="card-header" >
        <h3>Añade la tarea:</h3>
        <form @submit.prevent="agregarTarea(nombre)" class="form-group">
        <textarea  class="form-control form-control-sm" v-model="nombre" />
        <br><br>
        <button type="submit" class="btn btn-info"> <i class="fas fa-save fa-2x"></i>  </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Agregar',
    created(){
        this.agregarTarea()
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>
