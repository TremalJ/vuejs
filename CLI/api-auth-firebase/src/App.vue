<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import Navbar from './components/NavBar'
  export default {
    components: {
      Navbar
    },
    methods:{
    },
    created(){
    }
  }
</script>

