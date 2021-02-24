<template>
  <!-- <h1>Detalles {{ $route.params.nombre }}</h1> -->
  <h1>Detalles {{ nombre }}</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    {{ pais.name }} - {{ pais.region }}
  </p>
</template>

<script>
import { useRoute } from "vue-router";
import { useFetch } from "../hooks/useFetch";

export default {
  props: ["nombre"],
  setup() {
    // console.log(props.nombre);
    const nombreParams = useRoute();
    // console.log(nombreParams.params.nombre);

    return {
      ...useFetch(
        `https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`
      )
    };
  }
};
</script>
