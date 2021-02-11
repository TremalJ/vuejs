<template>
  <div class="about">
    <h1 :style="{ color: color }">Contador : {{ contador }}</h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    let contador = ref(0);

    const aumentar = () => {
      contador.value++;
    };

    const disminuir = () => {
      contador.value--;
    };

    const color = computed(() => {
      if (contador.value <= 0) {
        return "red";
      } else {
        return "red";
      }
    });

    return { contador, aumentar, disminuir, color };
  }
};
</script>
