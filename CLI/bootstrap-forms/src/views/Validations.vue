<template>
    <div class="container m-3">
    <h1>Vuelidate</h1>
    <form @submit.prevent="submit()" >
        <input 
        type="email" 
        placeholder="Ingresa un email" 
        class="form-control m-2"
        v-model="$v.email.$model"
        :class="{'is-invalid': $v.email.$error}"
        >
        <p class="text-danger" v-if="!$v.email.email">El email no es correcto</p>
        <p class="text-danger" v-if="!$v.email.required">* Campo requerido</p>
        <!-- <p>{{$v.email}}</p> -->
        <input type="password" 
        placeholder="ingresa contraseña"  
        v-model="$v.password.$model"
        class="form-control m-2" 
        :class="{'is-invalid': $v.password.$error}"
        >
        <p class="text-danger" v-if="!$v.password.minLength">* Mínimo 6 caracteres</p>
        <!-- <p>{{$v.password}}</p> -->
        <input 
        type="password" 
        v-model="$v.repeatPassword.$model" 
        placeholder="repite contraseña"  
        class="form-control m-2" 
        :class="{'is-invalid': $v.repeatPassword.$error}"
        >
        <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">* Las contraseñas no coinciden</p>
        <!-- <p>{{$v.repeatPassword}}</p> -->
        <b-button 
        variant="primary m-2" 
        type="submit"
        :disabled="$v.$invalid"
        >Enviar</b-button>
        <p>{{$v.$invalid}}</p>
        <p>{{$v}}</p>
    </form>
    </div>
  
</template>

<script>
import {required,email, sameAs , minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Validations',
    data(){
        return{
            email: '',
            password: '',
            repeatPassword: '',
        }
    },
    validations:{
        email:{ required, email },
        password:{ 
            required, 
            minLength: minLength(6) 
        },
        repeatPassword:{
            sameAsPassword: sameAs('password')
        } 
    },
    methods: {
        submit() {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
             console.log('ERROR EN EL ENVÍO DEL FORMULARIO!')
        } else {
            // do your submit logic here
            // this.submitStatus = 'PENDING'
            // setTimeout(() => {
            // this.submitStatus = 'OK'
            // }, 500)
            console.log('Enviando informacion'+ this.$v.password.$model+" "+this.$v.email.$model)
            console.log('FORMULARIO ENVIADO CORRECTAMENTE!')
        }
        }
    },
}
</script>
