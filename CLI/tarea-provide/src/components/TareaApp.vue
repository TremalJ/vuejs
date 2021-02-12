<template>
    <h1 >App Tareas</h1>
    <tarea-form></tarea-form>
    <p>{{tareas}}</p>
</template>

<script>
import { provide, ref } from 'vue';
import TareaForm from './TareaForm';
export default {
    components:{
        TareaForm
    },
    setup() {
        const tareas = ref([]);

        provide('tareas', tareas);

        return { tareas }
    }
}
</script>

<style>

</style>