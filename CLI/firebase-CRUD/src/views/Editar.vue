<template>
  Editar {{$route.params.id}} - {{tarea}}
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import Input from '../components/Input.vue'
import { mapActions, mapState  } from 'vuex'
export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods:  {
        ...mapActions(['editTarea', 'updateTarea'])
    },
    created(){
        this.editTarea(this.$route.params.id);
    }
}
</script>

<style>

</style>