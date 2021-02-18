<template>
  <h1>
      Registro
      <form @submit.prevent="createUser({email: email, password: password})">
        <input 
          type="email" 
          class="form-control m-1" 
          v-model="email"
          placeholder="Ingrese su correo">
        <small class="text-danger" v-if="!$v.email.required">* Campo requerido</small> 
        <input 
          type="password" 
          v-model="password" 
          class="form-control m-1" 
          placeholder="Ingrese su contraseña"
        >
        <small class="text-danger" v-if="!$v.password.required">* Campo requerido</small> 
        <small class="text-danger" v-if="!$v.password.minLength">* Mínimo 6 caracteres</small>
        <input 
          type="password" 
          v-model="password2" 
          class="form-control m-1" 
          placeholder="Repita su contraseña"
        >
        <small class="text-danger" v-if="!$v.password2.required">* Campo requerido</small> 
        <small class="text-danger" v-if="!$v.password2.minLength">* Mínimo 6 caracteres</small>
        <p class="text-danger" v-if="!$v.password2.sameAsPassword">* Las contraseñas no coinciden</p>
        {{ $v.password2 }}
        <br>
        <button class="btn btn-info" :disabled="!desactivar">Enviar</button>
        <p>{{error ? error.message : null}}</p>
      </form>
  </h1>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
      name: 'Register',
      data(){
        return{
          email: '',
          password: '',
          password2: '',
        }
      },
      methods: {
        ...mapActions(['createUser'])
      },
      computed:{
        ...mapState(['error']),
        desactivar(){
          return this.password === this.password2 && this.password.trim() !== '' && this.password.length > 5
        }
      },
      validations:{
        email: { email, required },
        password: { required, minLength: minLength(6) },
        password2: { required, minLength: minLength(6), sameAsPassword: sameAs('password') }
      }
}
</script>

<style>

</style>