<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador"
    >{{titulo}} :  {{contador}}</h1>
    <button @click="accionIncrementar">+</button>
    <disminuir />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations, mapActions} from 'vuex';
import Disminuir from '../components/Disminuir.vue';
export default {
  name: 'Home',
  components: {
    Disminuir    
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
