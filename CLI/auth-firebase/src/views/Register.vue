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
        <button class="btn btn-info">Enviar</button>
        <p>{{error.message}}</p>
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
        ...mapState(['error'])
      }
}
</script>

<style>

</style>