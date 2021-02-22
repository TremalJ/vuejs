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
                    <v-btn block color="info">
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
import {firebase, db, auth} from "../../firebase.js"
export default {
    data(){
        return{
            registro:true
        }
    },
    methods:{
        async google(){
            
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().languageCode = 'es';

            try {
                const result = await firebase.auth().signInWithPopup(provider);
                const user = result.user;
                console.log(user);
                //Guardar datos usuario:
                const usuario = {
                    nombre: user.displayName,
                    email: user.email,
                    uid:user.uid,
                    foto: user.photoURL
                }

                //Guardar en Firestore:
                await db.collection('usuarios').doc(usuario.uid).set(
                    usuario
                )

                console.log('Usuario guardado en DB')
            } catch (error) {
                console.log(error)
            }

            // await firebase.auth()
            // .signInWithPopup(provider)
            // .then((result) => {
            //     /** @type {firebase.auth.OAuthCredential} */
            //     var credential = result.credential;
            //     console.log(credential)
            //     // This gives you a Google Access Token. You can use it to access the Google API.
            //     var token = credential.accessToken;
            //     // The signed-in user info.
                
            //     // ...
            // }).catch((error) => {
            //     // Handle Errors here.
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     // The email of the user's account used.
            //     var email = error.email;
            //     // The firebase.auth.AuthCredential type that was used.
            //     var credential = error.credential;
            //     // ...
            // });
        }
    }
}
</script>