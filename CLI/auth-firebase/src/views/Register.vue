<template>
  <h1>
      Registro
      <form @submit.prevent="createUser({email: email, password: password})">
        <input 
          type="email" 
          class="form-control m-1" 
          v-model="email"
          placeholder="Ingrese su correo">
        <input 
          type="password" 
          v-model="password" 
          class="form-control m-1" 
          placeholder="Ingrese su contraseña"
        >
        <input 
          type="password" 
          v-model="password2" 
          class="form-control m-1" 
          placeholder="Repita su contraseña"
        >
        <button class="btn btn-info" :disabled="!desactivar">Enviar</button>
        <p>{{error ? error.message : null}}</p>
      </form>
  </h1>
</template>

<script>
import {mapActions, mapState} from 'vuex';
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
          return this.password === this.password2 && this.password.trim() !== ''
        }
      }
}
</script>

<style>

</style>