<template>
  <div class="container mt-5">
    <div class="card-body">
      <h1>{{ articulo.title }}</h1>
      <p>{{ articulo.body }}</p>
      <p>{{ articulo.autor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, isDev, route, store, env, params, query, req, res, redirect, error }) {
    try {
      const res = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
      const articulo = res
      const resUser = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + res.userId)
      articulo.autor = resUser.name
      return { articulo }
    } catch (error) {
    }
  },
  data () {
    return {
    }
  },
  async created () {
  }
}
</script>

<style>

</style>
