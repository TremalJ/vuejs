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

        <ul v-if="!carga">
            <li v-for="(item,index) in tasks" :key="index" class="list-group-item ">
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
import { mapActions, mapState } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    name: 'Start',
    components:{
        PulseLoader
    },
    computed:{
        ...mapState(['user','tasks', 'carga'])
    },
    methods:{
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    created(){
        this.getTareas();
    }
}
</script>