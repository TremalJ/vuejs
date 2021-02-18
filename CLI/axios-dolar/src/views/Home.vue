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
          {{valor}} - {{fecha}} - {{maximo}}
        </v-card-text>
        </v-card> 
    </v-flex>
  </v-layout>  
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      fecha: '',
      minimo: '1984',
      maximo: new Date().toISOString().substr(0,10), //Máximo fecha actual
    }
  },
  methods:{
    async getDolar(dia){
      let arrayFecha = dia.split('-')
      let ddmmyyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${dia}`)
      console.log(datos.data.serie[0].valor)
      this.valor = await datos.data.serie[0].valor
    }
  },
  created(){
    this.getDolar(this.fecha);
  }
}
</script>
