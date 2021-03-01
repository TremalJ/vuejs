<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
        <div v-for="(item, index) in articulos" :key="index">
          <v-card>
            <nuxt-link :to="`/blog/${item.id}`">
              <h1>
                {{ item.title }}
              </h1>
            </nuxt-link>
            <p>
              {{ item.body }}
            </p>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articulos: []
    }
  },
  async created () {
    const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    this.articulos = res
  }
}
</script>

<style>

</style>
