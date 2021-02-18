<template>
  <v-layout :wrap="true">
    <v-flex xs12>
      <v-card>
        <template>
          <v-row justify="center">
            <v-date-picker 
              v-model="fecha"
              full-width
            ></v-date-picker>
          </v-row>
        </template>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-xs-center">
          {{fecha}}
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
      fecha: ''
    }
  }
}
</script>
