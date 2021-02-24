<template>
  <h3 class="text-center">Filtrar por componentes</h3>
  <div class="btn-group flex-wrap">
    <button class="btn btn-info" @click="filtro('')">ALL</button>
    <button class="btn btn-dark" @click="filtro('Africa')">AFRICA</button>
    <button class="btn btn-dark" @click="filtro('Americas')">AMERICA</button>
    <button class="btn btn-dark" @click="filtro('Asia')">ASIA</button>
    <button class="btn btn-dark" @click="filtro('Europe')">EUROPA</button>
    <button class="btn btn-dark" @click="filtro('Oceania')">OCEANIA</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()


    const filtro = (region) =>  {
      store.dispatch('filtrarRegion', region)
    }

    return {filtro}
  }
}
</script>

<style>

</style>