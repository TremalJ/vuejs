<template>
  <v-app>
    <v-main name="app">
      <v-container>
        <router-view></router-view>
        <v-dialog
      v-model="loading.estado"
      persistent
      hide-overlay
      width="300"
    >
      <v-card 
      :color="loading.color"
      dark>
        <v-card-text>
          {{loading.titulo}}
          <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
          >
          </v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
  }),
  computed:{
    ...mapState(['loading'])
  }
};
</script>
