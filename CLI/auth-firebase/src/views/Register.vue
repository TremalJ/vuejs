<template>
  <h1>
      Registro
      <form>
        <input 
        type="email" 
        class="form-control m-1" 
        v-model="email"
        placeholder="Ingrese su correo">
        <input type="password" v-model="password" class="form-control m-1" placeholder="Ingrese su contraseña">
        <input type="password" v-model="password2" class="form-control m-1" placeholder="Repita su contraseña">
        <button class="btn btn-info">Enviar</button>
      </form>
  </h1>
</template>

<script>
export default {
      name: 'Register',
      data(){
        return{
          email: '',
          password: '',
          password2: '',
        }
      }
}
</script>

<style>

</style>