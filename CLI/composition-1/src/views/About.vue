<template>
  <div class="about">
    <Titulo :contador="contador" :style="{ color: color }" />
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
    <hr />
    <input type="text" v-model="texto" />
    <p>{{ texto }}</p>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
import { computed, ref } from "vue";
export default {
  components: {
    Titulo
  },
  setup() {
    let contador = ref(0);
    const texto = ref("");

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
        return "blue";
      }
    });

    return { contador, aumentar, disminuir, color, texto };
  }
};
</script>
