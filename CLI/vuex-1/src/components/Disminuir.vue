<template>
  <button @click="accionDecrementar(50)">-</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    methods: {
        ...mapActions(['accionDecrementar']),
    }
}
</script>
