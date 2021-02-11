<template>
  <h3 class="text-center">Filtrar por componentes</h3>
  <div class="btn-group">
    <button class="btn btn-dark" :filtro="filtro('Americas')">AMERICA</button>
    <button class="btn btn-dark" @click="filtro('Europe')">EUROPA</button>
    <button class="btn btn-dark" @click="filtro('Asia')">ASIA</button>
    <button class="btn btn-dark" @click="filtro('Oceania')">OCEANIA</button>
    <button class="btn btn-dark" @click="filtro('Africa')">AFRICA</button>
    <button class="btn btn-dark" @click="filtro('')">ALL</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()


    const filtro = (region) =>  {
      console.log(region)
      store.dispatch('filtrarRegion', region)
    }

    return {filtro}
  }
}
</script>

<style>

</style>