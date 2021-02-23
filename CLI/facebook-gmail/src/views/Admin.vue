<template>
  <v-layout row wrap>
      <v-flex xs6>
          <v-card
            class="xs-text-center"
          >
             <v-card-text>
                 <v-avatar>
                 <img :src="usuario.foto" alt="avatar"/>
             </v-avatar> 
                <h3>{{usuario.nombre}}</h3> 
             </v-card-text>   
             <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)">
             <v-btn color="primary" @click="$refs.boton.click()">Buscar imagen</v-btn>
             <!-- <v-btn>
                 Guardar imagen
             </v-btn> -->
             <v-btn @click="subirImagen()" :loading="loading" color="secondary" :disabled="file === null">Subir imagen</v-btn>
             <v-card-text v-if="!subidaExito">
                 <h4 v-if="file">
                    {{file.name}} 
                 </h4>
             </v-card-text>
             <v-card-text  v-if="error">
                 <h4>
                    {{error}} 
                 </h4>
             </v-card-text>
             <v-card-text  v-if="subidaExito">
                 <h4>
                    {{subidaExito}} 
                 </h4>
             </v-card-text>
             <v-card-text v-if="!subidaExito">
                 <img width="150"  v-if="file" :src="urlTemporal" alt="">
             </v-card-text>
          </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import {db, storage } from '../../firebase'
export default {
    data(){
        return{
            file:null,
            urlTemporal: '',
            loading: false,
            error: '',
            subidaExito: ''
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        buscarImagen(event){
            this.file = event.target.files[0];

            const tipoArchivo = event.target.files[0].type;

            if(tipoArchivo === 'image/jpeg' ||  tipoArchivo === 'image/png') {
                this.file  = event.target.files[0]
                this.error = ''
            }else{
                this.error = 'Archivo no valido'
                this.subidaExito = ''
                this.file = null
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                console.log(e.target.result)
                this.urlTemporal = e.target.result
            }
        },
        async subirImagen(){
            try {
                this.loading = true;

                const refImagen = storage.ref().child(this.usuario.email).child('foto perfil');

                const res = await refImagen.put(this.file)
                console.log(res)

                const urlDescarga = await refImagen.getDownloadURL()
                this.usuario.foto = urlDescarga;

                await db.collection('usuarios').doc(this.usuario.uid).update({
                    foto: urlDescarga
                })

                this.loading = false;
                this.subidaExito = 'Imagen subida con éxito!'
            } catch (error) {
                console.log(error)
            } 
        }
    }
}
</script>

<style>

</style>