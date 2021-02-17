<template>
    <div>
        <h1>
            Acceso usuario
        </h1>
        <form @submit.prevent="loginUser({ email: email, password: password })">
            <input type="email" v-model="email" class="form-control m-1" placeholder="Ingrese email">
            <input type="password" v-model="password" class="form-control m-1" placeholder="Ingrese contraseña">

            <button class="btn btn-info" type="submit">Entrar</button>
        </form>
        <p>{{error ? error.message : null}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
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
    }
}
</script>