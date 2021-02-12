<template>
    <h1 >App Tareas</h1>
    <tarea-form></tarea-form>
    <tarea-item
    v-for="tarea in tareas" :key="tarea.id" 
    :tarea=tarea
    >
    </tarea-item>

    <div class="alert alert-dark mt-3" v-if="tareas.length === 0">
        Sin tareas pendientes
    </div>
    <p>{{tareas}}</p>
</template>

<script>
import { provide, ref } from 'vue';
import TareaForm from './TareaForm';
import TareaItem from './TareaItem';
export default {
    components:{
        TareaForm,
        TareaItem
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