<template>
  <div class="table-responsive">
  <table class="table">
    <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorias</th>
        <th scope="col">Estado</th>
        <th scope="col">Número</th>
        <th scope="col">Acción</th>
    </tr>
    <tr v-for="tarea in tareas" :key="tarea.id">
        <td>{{ tarea.id }} </td>
        <td>{{ tarea.nombre }} </td>
        <td>{{tarea.categorias.join(',')}}</td>
        <td>{{ tarea.estado }} </td>
        <td>{{ tarea.numero }} </td>
        <td>
            <button @click="deleteTareas(tarea.id)" class="btn-danger">Eliminar</button>
            <router-link 
                class="btn btn-warning ml-2 btn-sm"
                :to="{
                    name: 'Edit',
                    params: {
                        id: tarea.id
                    }
                }"
            >
                Editar
            </router-link>
        </td>
    </tr>
  </table>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['tareas']),
    },
    methods: {
        ...mapActions(['deleteTareas']),
    }
}
</script>

<style>

</style>