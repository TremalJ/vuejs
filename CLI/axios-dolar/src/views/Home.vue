<template>
  <v-layout :wrap="true">
    <v-flex xs12>
      <v-card>
        <template>
          <v-row justify="center">
            <v-date-picker 
              v-model="fecha"
              full-width
              locale="es-c1"
              :min="minimo"
              :max="maximo"
              @change="getDolar(fecha)"
            ></v-date-picker>
          </v-row>
        </template>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-xs-center">
          {{valor}}
        </v-card-text>
        </v-card> 
    </v-flex>
  </v-layout>  
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      fecha: '',
      minimo: '1984',
      // maximo: new Date().toISOString().substr(0,10), //Máximo fecha actual
      maximo: '2050',
      valor: ''
    }
  },
  methods:{
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),
    async getDolar(dia){
      let arrayFecha = dia.split('-')
      let ddmmyyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]
      
      try {
        this.mostrarLoading({titulo: 'Accediendo a información', color:'secondary'})

        let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyyy}`)
        console.log(datos.data.serie.length)
        if(datos.data.serie.length > 0) {
          this.valor = await datos.data.serie[0].valor 
        } else {
          this.valor = "Sin Valor"
        }
      } catch (error) {
        console.log(error)
      }finally{
        this.ocultarLoading()
      }
    }
  },
  created(){
    if(this.fecha === '') {
      var f = new Date();
      this.fecha = f.getFullYear()+'-'+(f.getMonth() +1) + "-" + f.getDate();
      console.log(f.getFullYear()+'-'+(f.getMonth() +1) + "-" + f.getDate())
    }
    this.getDolar(this.fecha);
  }
}
</script>
