<template>
    <div>
        <h1>Mis Tareas</h1>
        <router-link :to="{ name: 'Agregar'}"><button class="btn btn-success"><i class="fas fa-plus-square fa-1x"></i></button></router-link>
        <br><br>
        <li  
        class="card-header" 
        v-for="(item, index) in tareas" :key=index
        >
            {{item.nombre}}
        <br><br>    
        <router-link :to="{ name: 'Editar', params: { id: item.id }}" class="btn btn-warning btn-sn m-1">
           <i class="fas fa-edit fa-1x"></i>
        </router-link>  
        <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sn"><i class="far fa-trash-alt fa-1x"></i></button>
        </li>
        <div class="alert alert-dark mt-3" v-if="tareas.length === 0">
        Sin tareas pendientes 😃 💪
        </div>
        <footer class="bg-light text-center text-lg-start"  v-if="tareas.length > 0">Tienes {{tareas.length}} tareas pendientes</footer> 
    </div> 
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    created() { // the created hook can be used to run code after an instance is created:
        this.getTareas()
        console.log(tareas);
    },
    methods:{ // Event handler. Métodos para ser mezclados dentro de la instancia de Vue. Puede acceder a estos métodos directamente en la instancia VM o usarlos en expresiones directivas. Todos los métodos tendrán su contexto this vinculado automáticamente a la instancia de Vue.
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    computed: { //Propiedades computadas a ser mezcladas dentro de la instancia de Vue. Todos los getters y setters tienen su contexto this vinculado automáticamente a la instancia de Vue.
        ...mapState(['tareas'])
    }
}
</script>

<style>

</style>