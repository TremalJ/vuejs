<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Mi contador: {{ $store.state.contador }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
