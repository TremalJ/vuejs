<template>
    <div  class="card-header" >
        <h3>Añade la tarea:</h3>
        <form @submit.prevent="agregarTarea($v.nombre.$model)" class="form-group">
        <textarea  class="form-control form-control-sm" v-model="$v.nombre.$model" />
        <p>{{$v.nombre.$model}}</p>
        <p>{{$v.nombre.$invalid}}</p>
        <p>{{carga}}</p>
        <br><br>
        <button type="submit" class="btn btn-info" :disabled="$v.nombre.$invalid"> Agregar</button>
        </form>
        <small class="text-danger d-block" v-if="!$v.nombre.required">Campo requerido</small>
        <small class="text-danger d-block" v-if="!$v.nombre.minLength">Mínimo 5 caracteres</small>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Add',
    data(){
        return {
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    },
    computed:{
        ...mapState(['carga'])
    },
    validations:{
        nombre:{ required, minLength: minLength(5)}
    }
}
</script>
