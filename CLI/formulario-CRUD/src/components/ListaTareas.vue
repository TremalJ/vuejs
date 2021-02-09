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
    <tr v-for="item in tareas" :key="item.id">
        <td>{{ item.id }} </td>
        <td>{{ item.nombre }} </td>
        <td>{{item.categorias.join(',')}}</td>
        <td>{{ item.estado }} </td>
        <td>{{ item.numero }} </td>
        <td>
            <button @click="deleteTareas(item.id)" class="btn-danger">Eliminar</button>
            <router-link 
                class="btn btn-warning ml-2 btn-sm"
                :to="{
                    name: 'Edit',
                    params: {
                        id: item.id
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
import { mapActions, mapState } from 'vuex'
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