<template>
  <div id="app">
  <v-app dense>
    <NavBar v-if="usuario != ''" />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapState(['usuario'])
  },
  methods:{
  }
};
</script>
