<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayPaises" :key="index">
    <router-link :to="`/pais/${pais.name}`"> {{ pais.name }}</router-link>
  </p>
</template>

<script>
import { useFetch } from "../hooks/useFetch";
export default {
  setup() {
    return { ...useFetch("api.json") };
  }
};
</script>
