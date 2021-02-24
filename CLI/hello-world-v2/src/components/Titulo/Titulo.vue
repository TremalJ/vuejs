<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    h1 {
        color:peru;
    }
</style>