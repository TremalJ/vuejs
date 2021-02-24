<template>
<h3>Bienvenido {{usuario.nombre}}</h3>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
