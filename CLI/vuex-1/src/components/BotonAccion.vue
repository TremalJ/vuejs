<template>
    <button
        @click="accionBoton({estado: estado, numero: 15})"
    >
        {{textoBoton}}
    </button>
</template>

<script>
import {mapAction, mapActions} from 'vuex'
export default {
    props: {
        estado: Boolean
    },
    computed: {
        textoBoton(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    methods: {
        ...mapActions(['accionBoton'])
    }
}
</script>

<style>

</style>