<template>
  <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
      <p class="m-0">{{tarea.texto}}</p>
      <div>
          <i class="fas fa-check-circle mx-2 text-success" role="button"></i>
          <i class="fas fa-minus-circle mx-2 text-danger" role="button"></i>
          <i></i>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        tarea: Object,
        required: false,
    }
}
</script>

<style>

</style>