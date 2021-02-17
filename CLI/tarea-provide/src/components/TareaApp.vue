<template>
    <h1 class="display-4">Jsp Tasks</h1>
    <tarea-form></tarea-form>
    <tarea-item
    v-for="tarea in tareas" :key="tarea.id" 
    :tarea=tarea
    >
    </tarea-item>

    <!-- <div class="alert alert-dark mt-3" v-if="tareas.length === 0">
        Sin tareas pendientes 😃 💪
    </div> -->
    <p>{{tareas}}</p>
</template>

<script>
import { provide, ref, watchEffect } from 'vue';
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
        if(localStorage.getItem('tareas') !== 'undefined'){
            tareas.value = JSON.parse(localStorage.getItem('tareas'));
        }

        watchEffect(() => { //The watchEffect() hook works like the computed() hook or the computed option, but instead of returning a value, you use it to trigger side-effects.
            localStorage.setItem('tareas', JSON.stringify(tareas.value))
        });

        return { tareas }
    }
}
</script>

<style>

</style>