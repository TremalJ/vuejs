<template>
  <div class="mt-5">
      <h1>Formularios</h1>

      <form>
          <b-col>
             <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
             <small>Mínimo 3 caracteres.</small>
          </b-col>
      </form>
      <p> texto: {{texto}}</p>
  </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            texto: ''
        }
    },
    computed:{
        comprobar(){

            return this.texto.length < 3 ? false : true;
        }
    }
}
</script>

<style>

</style>