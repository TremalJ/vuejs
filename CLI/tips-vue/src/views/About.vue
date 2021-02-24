<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="item in tareasState" :key="item.id">
      {{ item }}
    </h2>
    <!-- <h3 v-for="item in contadorState" :key="item.id">
      {{ item }}
    </h3> -->
    <p>{{titulo}}</p>
    <p>{{contador}}</p>
    <button @click="aumentarContador(3)">+</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('tareas', ['tareasState', 'contadorState']), //carga de modulo a la izquierda, a la derecha lo que hay en state 
    ...mapState(['titulo']), //carga de modulo a la izquierda, a la derecha lo que hay en state 
    ...mapState( 'contador',  ['contador']), //carga de modulo a la izquierda, a la derecha lo que hay en state 
  },
  methods:{
    ...mapMutations('contador', ['aumentarContador'])
  }
}
</script>