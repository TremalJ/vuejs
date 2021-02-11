<template>
  <div class="row">
      <div 
      class="col-12"
      v-for="pais in paises"
      :key="pais.name"
      >
      <Card :pais="pais" />
      </div>
  </div>
</template>

<script>
import Card from '../components/Card';
import { computed, onMounted } from 'vue'
import { useStore} from 'vuex'
export default {
    components: {
        Card
    },
    setup(){
        const store = useStore()
        
        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })
        
        onMounted(async() => {
            await store.dispatch('getPaises'); //despacha acción de la store
            await store.dispatch('filtrarRegion', 'Americas');
        })
        console.log(paises)
        return { paises }
    }
}
</script>

<style>

</style>