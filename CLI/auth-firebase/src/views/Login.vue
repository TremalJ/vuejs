<template>
    <div>
        <h1>
            Acceso usuario
        </h1>
        <form @submit.prevent="loginUser({ email: email, password: password })">
            <input type="email" v-model="$v.email.$model" class="form-control my-2" placeholder="Ingrese email">
            <small class="text-danger" v-if="!$v.email.required">* Campo requerido</small>
            <input type="password" v-model="$v.password.$model" class="form-control my-2" placeholder="Ingrese contraseña">
            <small class="text-danger" v-if="!$v.password.required">* Campo requerido</small>
            <small class="text-danger" v-if="!$v.password.minLength">* Mínimo 6 caracteres</small>
            <br>
            <button 
            class="btn btn-info" 
            :disabled="$v.$invalid"
            type="submit">Entrar</button>
        </form>
        <p class="text-danger">{{ ((error)&&(error.code === 'auth/user-not-found')) ? 'Usuario no encontrado' : null}}</p>
        <p class="text-danger">{{ ((error)&&(error.code === 'auth/wrong-password')) ? 'Contraseña incorrecta' : null}}</p>
        <p class="text-danger">{{ ((error)&&(error.code === 'auth/too-many-requests')) ? 'Demasiados intentos de acceso erróneos...pruebe más tarde' : null}}</p>
        <p>{{$v}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
     data(){
        return {
            email: '',
            password: '',
        }
    },
    methods:{
        ...mapActions(['loginUser'])
    },
    computed:{
        ...mapState(['error'])
    },
    validations:{
        email:{ required, email },
        password:{required, minLength: minLength(6)}
    }
}
</script>