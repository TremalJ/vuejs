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
        <!-- <p>{{$v.email}}</p> -->
        <input type="password" 
        placeholder="ingresa contraseña"  
        v-model="$v.password.$model"
        class="form-control m-2" 
        :class="{'is-invalid': $v.password.$error}"
        name="" id="">
        <p class="text-danger" v-if="!$v.password.minLength">* Mínimo 6 caracteres</p>
        <!-- <p>{{$v.password}}</p> -->
        <input 
        type="password" 
        v-model="$v.repeatPassword.$model" 
        placeholder="repite contraseña"  
        class="form-control m-2" 
        :class="{'is-invalid': $v.repeatPassword.$error}"
        name="" 
        id=""
        >
        <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">* Las contraseñas no coinciden</p>
        <!-- <p>{{$v.repeatPassword}}</p> -->
    </form>
    </div>
  
</template>

<script>
import {required,email, sameAs , minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Validations',
    data(){
        return{
            email: '',
            password: '',
            repeatPassword: '',
        }
    },
    validations:{
        email:{ required, email },
        password:{ 
            required, 
            minLength: minLength(6) 
        },
        repeatPassword:{
            sameAsPassword: sameAs('password')
        } 
    }
}
</script>
