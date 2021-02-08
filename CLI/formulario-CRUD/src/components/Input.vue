<template>
   <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese Nombre"
      v-model.trim="tarea.nombre"
    >
    <div clas="form-check form-check-inline">
      <input 
      type="checkbox" 
      name="form-check-input" 
      id="check-1"
      v-model="tarea.categorias"
      value="javascript"
      >
      <label for="check-1" class="form-check-input">Javascript</label>
    </div>
    <div clas="form-check form-check-inline">
      <input 
      type="checkbox" 
      name="form-check-input" 
      id="check-2"
      v-model="tarea.categorias"
      value="nodejs"
      >
      <label for="check-2" class="form-check-input">NodeJS</label>
    </div>
    <div class="mt-2">
      <div clas="form-check form-check-inline">
        <input 
        type="radio" 
        name="" 
        id="radio-1"
        value="urgente"
        v-model="tarea.estado"
        />
        <label for="radio-1">Urgente</label>
        <input 
        type="radio" 
        name="" 
        id="radio-2"
        value="relax"
        v-model="tarea.estado"
        />
        <label for="radio-2">Relax</label>
      </div>
    </div>
    <div class="mt-2">
      <input 
      type="number"
       name="" 
       id=""
       class='form-control'
       v-model="tarea.numero"
       placeholder="Introduce número"
      />
    </div>  
    <button 
      class="btn mt-2 btn-dark" 
      type="submit"
      :disabled="activarBoton"
    >
    Procesar
    </button>
</template>

<script>
export default {
  props: {
    tarea: Object
  },
  computed: {
      activarBoton() {
       return this.tarea.nombre.trim() === ""  ? true : false;
      }
  },
}
</script>

<style>

</style>