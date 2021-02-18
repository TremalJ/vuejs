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
            ></v-date-picker>
          </v-row>
        </template>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-xs-center">
          {{fecha}} - {{maximo}}
        </v-card-text>
        </v-card> 
    </v-flex>
  </v-layout>  
</template>

<script>
// @ is an alias to /src

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
  }
}
</script>
