import { onMounted, ref } from "vue";

export function useFetch(url) {
  const arrayPaises = ref([]);

  onMounted(async () => {
    try {
      const res = await fetch(url);
      //   const res = await fetch("https://restcountries.eu/rest/v2/all");
      arrayPaises.value = await res.json();
    } catch (error) {
      console.log(error);
    }
  });

  return { arrayPaises };
}
