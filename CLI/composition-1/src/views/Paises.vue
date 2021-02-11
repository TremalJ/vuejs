<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayPaises" :key="index">
    {{ pais.name }}
  </p>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const arrayPaises = ref([]);

    onMounted(async () => {
      try {
        const res = await fetch("api.json");
        //const res = await fetch("https://restcountries.eu/rest/v2/all");
        arrayPaises.value = await res.json();
      } catch (error) {
        console.log(error);
      }
    });

    // const fetchData = async () => {
    //   try {
    //     const res = await fetch("api.json");
    //     //const res = await fetch("https://restcountries.eu/rest/v2/all");
    //     arrayPaises.value = await res.json();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();

    return { arrayPaises };
  }
};
</script>
