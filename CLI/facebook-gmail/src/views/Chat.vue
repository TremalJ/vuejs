<template>
    <v-container fluid>
        <v-layout row wrap>
        <v-flex full-width>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido, {{usuario.nombre}}</h3>
                </v-card-text>
                <v-card-text>
                <div class="text-right">
                    <v-chip close>
                        <v-avatar
                            size="avatarSize"
                            color="red"
                        >
                            <img :src="usuario.foto" alt="alt">
                        </v-avatar>Mensaje de chat
                    </v-chip>
                    <p class="caption mr-2">23 febrero, 2021</p>
                </div>
                </v-card-text>
                <v-card-text>
                    <v-form @submit.prevent="enviarMensaje" v-model="valido">
                        <v-text-field v-model="mensaje" label="Escribe tu mensaje aquí" :rules="reglas">

                        </v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'chat',
    data(){
        return{
            mensaje: '',
            valido: false,
            reglas: [
                v => !!v || 'Tienes que escribir un mensaje...'
            ]
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        enviarMensaje(){
            if(this.valido) {
                console.log('Enviaste el mensaje', this.mensaje)
            }else {
                console.log('no escribiste nada')
            }
        }
    }

}
</script>

<style>

</style>