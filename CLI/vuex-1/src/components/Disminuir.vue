<template>
  <button @click="accionDecrementar">-</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    methods: {
        ...mapActions(['accionDecrementar']),
    }
}
</script>
