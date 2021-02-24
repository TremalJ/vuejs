<template>
    <v-layout justify-center mt-5>
        <v-flex>
            <v-card>
                <v-card-text class="display-1 text-uppercase primary white--text text-center"
                :class="registro ? 'success': 'accent'">
                    <span class="text-center">{{ registro ? 'Registro' : 'Ingreso' }}</span>
                </v-card-text>
                <v-card-text block >
                    <v-btn block color="error" @click="google">
                        <v-icon>fab fa-google</v-icon><span class="ml-4">Google</span>
                    </v-btn>
                    <v-btn block color="info" @click="facebook">
                        <v-icon>fab fa-facebook-f </v-icon><span class="ml-4">Facebook</span>
                    </v-btn>
                </v-card-text>
                <v-card-text>
                    <v-btn block @click="registro = !registro" v-if="!registro">
                        ¿No tienes cuenta? Regístrate aquí
                    </v-btn>
                    <v-btn block @click="registro = !registro" v-if="registro">
                        ¿Ya tienes cuenta? Ingresa aquí
                    </v-btn>
                </v-card-text>
            </v-card>
            
        </v-flex>
    </v-layout>
</template>

<script>
import {firebase} from "../../firebase.js"
import {mapActions, mapMutations} from 'vuex'
import router from '../router'
export default {
    data(){
        return{
            registro:true
        }
    },
    methods:{
        ...mapMutations(['nuevoUsuario']),
        ...mapActions(['setUsuario']),
        facebook(){
            console.log('facebook')
            var provider = new firebase.auth.FacebookAuthProvider();
            this.ingresar(provider)
        },
        google(){
            console.log('google')
            var provider = new firebase.auth.GoogleAuthProvider();
            this.ingresar(provider)
        },
        async ingresar(provider){
            firebase.auth().languageCode = 'es';

            try {
                const result = await firebase.auth().signInWithPopup(provider);
                const user = result.user;

                this.setUsuario(user)

                //Guardar en Firestore:              
                router.push({name: 'home'})

                console.log('Usuario guardado en DB')
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>