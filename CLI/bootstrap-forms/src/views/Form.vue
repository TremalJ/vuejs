<template>
  <div class="mt-5">
      <h1>Formularios</h1>

      <form>
          <b-row>
            <b-col md="4">
             <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
             <small>Mínimo 3 caracteres.</small>
             <p> texto: {{texto}}</p>
            </b-col>
            <b-col md="4">
                <b-form-select v-model="select" :options="animales"></b-form-select>
                <p>Seleccion {{ select }}</p>
            </b-col>
            <b-col md="4" class="mt-3">
                <b-form-radio-group v-model="radio" :options="animalesRadio">
                <p>Seleccion {{ radio }}</p>
                </b-form-radio-group>
            </b-col>
            <b-col md="4">
                <b-form-checkbox-group 
                v-model="selected" 
                :options="animalesRadio">

                </b-form-checkbox-group>
                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </b-col>
          </b-row>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            texto: '',
            select: null,
            radio: null,
            animales:[
                {value: null, text: 'Seleccione un animal'},
                {value: 'perro', text: 'Guau Guau'},
                {value: 'gato', text: 'Miau Miau'},
                {value: 'pato', text: 'Kwak Kwak'},
            ],
            animalesRadio:[
                {value: 'perro', text: 'Guau Guau'},
                {value: 'gato', text: 'Miau Miau'},
                {value: 'pato', text: 'Kwak Kwak'},
                {value: 'cerdo', text: 'Oing Oing'},
            ],
            selected: [],
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