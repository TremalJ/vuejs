<template>
    <v-layout justify-center mt-5>
        <v-flex>
            <v-card>
                <v-card-text class="display-1 text-uppercase primary white--text text-center"
                :class="registro ? 'success': 'primary'">
                    <span class="text-center">{{ registro ? 'Registro' : 'Ingreso' }}</span>
                </v-card-text>
                <v-card-text block >
                    <v-btn block color="error">
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
export default {
    data(){
        return{
            registro:true
        }
        
    }
}
</script>