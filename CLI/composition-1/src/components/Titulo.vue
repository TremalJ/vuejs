<template>
  <h1>Contador: {{ signoPeso }}</h1>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["contador"],
  setup(props) {
    const signoPeso = computed(() => {
      return "$" + props.contador;
    });

    return { signoPeso };
  }
};
</script>
