<template>
    <v-container fluid>
        <v-layout row wrap>
        <v-flex full-width>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido, {{usuario.nombre}}</h3>
                </v-card-text>
                <v-card-text style="heigth: 60vh; overflow: auto" v-chat-scroll>
                    <div v-for="(item) in mensajes" :key="item.uid" :class="item.nombre === usuario.nombre ? 'text-right' : 'text-left'">
                        <v-chip close>
                        <v-avatar
                            size="avatarSize"
                            color="red"
                            class="mr-3"
                        >
                            <img :src="item.foto" alt="alt">
                        </v-avatar> 
                        <p  class="mt-4">{{item.mensaje}}</p>
                        </v-chip>
                        <p class="caption mr-2">{{item.fecha}}</p>
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-form @submit.prevent="enviarMensaje" v-model="valido" id="mensaje">
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
import {db} from '../../firebase'
import { mapMutations, mapActions, mapState } from 'vuex'
import moment from 'moment';
export default {
    name:'chat',
    data(){
        return{
            mensaje: '',
            valido: false,
            reglas: [
                v => !!v || 'Tienes que escribir un mensaje...',
            ],
            mensajes: [],
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        ...mapMutations(['nuevoMensaje']),
        ...mapActions(['setMensaje']),
        enviarMensaje(){
            if(this.valido) {
                console.log('Enviaste el mensaje', this.mensaje)
                const chatUsuario = {
                    uid: this.usuario.uid,
                    nombre: this.usuario.nombre,
                    foto: this.usuario.foto,
                    mensaje: this.mensaje,
                    fecha: Date.now(),
                }    
                this.setMensaje(chatUsuario);
                document.getElementById("mensaje").reset();
            }else {
                console.log('no escribiste nada')
            }
        }
    },
    created(){
        moment.locale('es');

        let ref = db.collection('chat').orderBy('fecha', 'desc');

        ref.onSnapshot (querySnapshot =>{
            this.mensajes = [];

            querySnapshot.forEach(doc => {
                this.mensajes.unshift({
                    mensaje: doc.data().mensaje,
                    foto: doc.data().foto,
                    nombre: doc.data().nombre,
                    fecha: moment( doc.data().fecha).format('lll')
                });
            });

            console.log(this.mensajes)
        })
    }
}
</script>

<style>

</style>