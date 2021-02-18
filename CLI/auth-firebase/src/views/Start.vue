<template>
    <div >
        <h1>Ruta protegida</h1>
        <p>
            {{user.email}}
        </p>
        <router-link :to="{ name: 'Add'}"><button class="btn btn-success">Agregar</button></router-link>
        <br><br>
        <div v-if="carga" class="text-center mt-5">
            <PulseLoader />
        </div>

        <form  @submit.prevent="Buscador">
            <input
            type="text" 
            placeholder="Buscar tarea..."
            v-model="texto"
            v-on:keyup="Buscador(texto)"
            >
        </form>
        <br>
        <ul v-if="!carga">
            <li v-for="(item,index) in arrayFiltrado" :key="index" class="list-group-item ">
                {{ item.id }} - {{ item.nombre }}
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
                <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sn m-2">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    name: 'Start',
    data(){
        return {
            texto: ''
        }
    },
    components:{
        PulseLoader
    },
    computed:{
        ...mapState(['user','tasks', 'carga']),
        ...mapGetters(['arrayFiltrado'])
    },
    methods:{
        ...mapActions(['getTareas', 'eliminarTarea', 'Buscador'])
    },
    created(){
        this.getTareas();
    }
}
</script>