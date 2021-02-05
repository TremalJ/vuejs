<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador"
    >{{titulo}} :  {{contador}}</h1>
    <button @click="accionIncrementar">+</button>
    <disminuir />
    <hr>
    <boton-accion :estado="true" />
    <boton-accion :estado="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations, mapActions} from 'vuex';
import Disminuir from '../components/Disminuir.vue';
import BotonAccion from '../components/BotonAccion.vue';
export default {
  name: 'Home',
  components: {
    Disminuir,
    BotonAccion    
  },
  data() {
    return {
      titulo: 'Mi contador Vuex',
    }   
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color' : 'green'} : {'color' : 'red'}]
    }
  },
  mutations: {

  },
  methods: {
    ...mapMutations(['incrementar','decrementar']),
    ...mapActions(['accionIncrementar','accionDecrementar']),
  }
}
</script>
