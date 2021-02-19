<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase" >
       <span>Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <span>Cerrar sesión</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
    </v-toolbar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
