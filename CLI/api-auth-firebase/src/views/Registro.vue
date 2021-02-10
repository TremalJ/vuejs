<template>
  <h1>Registro de usuarios</h1>
  <form @submit.prevent="procesarFormulario()">
      <input 
        type="email" 
        name="" 
        placeholder="email" 
        class="form-control my-2"
        v-model.trim="email"
      >
      <input 
        type="password" 
        placeholder="password" 
        name="" 
        class="form-control my-2"
        v-model.trim="pass1"
      >
      <input 
        type="password" 
        name="" 
        placeholder="repetir password" 
        class="form-control my-2"
        v-model.trim="pass2"
        >
      <button 
        type="submit" 
        class="btn btn-primary"
        :disabled="bloquear"
        >
        Registrar
       </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            email: 'tomate@mail.com',
            pass1: '123123123',
            pass2: '123123123',
        }
    },
    computed: {
        bloquear() {
            if(!this.email.includes('@')){
                return true;
            }  
            if(this.pass1.length  > 5 && this.pass2.length  > 5){
                return false;
            }
            if(this.pass1 === this.pass2){
                return false;
            }
            return true;
        }
    },
    methods:  {
      ...mapActions(['registrarUsuario']),
      procesarFormulario(){
        this.registrarUsuario({email: this.email, password: this.pass1});
        console.log(this.email+" "+this.pass1)
        this.email = ''
        this.pass1 = ''
        this.pass2 = ''
      }
    }
}
</script>

<style>

</style>