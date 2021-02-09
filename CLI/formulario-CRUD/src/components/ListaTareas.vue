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
    </tr>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['tareas']),
    }
}
</script>

<style>

</style>