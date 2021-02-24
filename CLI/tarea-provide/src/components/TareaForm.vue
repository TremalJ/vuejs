<template>
    <form @submit.prevent="AgregarTarea()">
        <input type="text" 
        placeholder="Ingrese tarea"
        class="form-control my-2"
        v-model.trim="texto"
        name="" id="">
        <button class="btn btn-primary w-100">Agregar</button>
    </form>
</template>

<script>
import { inject, ref } from 'vue'
export default {
    setup(){
        const texto = ref('')
        const tareas = inject('tareas')        

        const AgregarTarea = () => {
            if(texto.value === '') {
                return;
            } else {
                const tarea = {
                    texto: texto.value,
                    estado: false,
                    id: Date.now()
                }
                tareas.value.push(tarea)
                texto.value = ''
            }            
        }

        return {AgregarTarea, texto}
    }
}
</script>

<style>

</style>