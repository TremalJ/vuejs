<template>
    <div class="container m-3">
    <h1>Vuelidate</h1>
    <form >
        <input 
        type="email" 
        placeholder="Ingresa un email" 
        name="" 
        id="" 
        class="form-control m-2"
        v-model="$v.email.$model"
        :class="{'is-invalid': $v.email.$error}"
        >
        <p class="text-danger" v-if="!$v.email.email">El email no es correcto</p>
        <p class="text-danger" v-if="!$v.email.required">* Campo requerido</p>
        <p>{{$v.email}}</p>
    </form>
    </div>
  
</template>

<script>
import {required,email} from 'vuelidate/lib/validators'
export default {
    name: 'Validations',
    data(){
        return{
            email: ''
        }
    },
    validations:{
        email:{ required, email}
    }
}
</script>
