<template>
  <button @click="contador ++">Aumentar</button>
</template>

<script>
import { inject } from 'vue'
export default {
    setup(){
        const contador = inject('contador');

        return {contador}
    }
    
}
</script>

<style>

</style>