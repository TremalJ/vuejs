<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from './components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['cerrarSesion'])
  }
};
</script>
