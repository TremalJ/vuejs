<template>
  <div class="row">
      <div class="col-12">
          {{paises}}
      </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        
        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })
        
        onMounted(() => {
            store.dispatch('getPaises'); //despacha acción de la store
            console.log(store)
        })

        console.log(paises)

        return { paises }
    }
}
</script>

<style>

</style>