<template>
  <h1>Registro de usuarios</h1>
  <form action="">
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
export default {
    data(){
        return {
            email: '',
            pass1: '',
            pass2: '',
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
    }
}
</script>

<style>

</style>