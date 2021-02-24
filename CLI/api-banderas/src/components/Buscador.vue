<template>
  <input 
  type="text" 
  placeholder="Ingrese País" 
  class="form-control my-3"
  v-model="texto"
  @keyup="procesarInput(texto)"
  >
  <p >{{texto}}</p>

</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    setup(){
        const texto = ref('');
        const store = useStore()
        

        const procesarInput = (texto) =>{
            console.log(texto)
            store.dispatch('filtrarNombre', texto)
        }

        return { texto, procesarInput }
    }
}
</script>

<style>

</style>