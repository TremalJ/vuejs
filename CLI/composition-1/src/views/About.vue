<template>
  <div class="about">
    <h1>Contador : {{ contador }}</h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let contador = ref(0);

    const aumentar = () => {
      contador.value++;
    };

    const disminuir = () => {
      contador.value--;
    };

    return { contador, aumentar, disminuir };
  }
};
</script>
