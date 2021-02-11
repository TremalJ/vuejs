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
        
        onMounted(() => {
            store.dispatch('getPaises'); //despacha acción de la store
            console.log(store)
        })

        return { paises }
    }
}
</script>

<style>

</style>