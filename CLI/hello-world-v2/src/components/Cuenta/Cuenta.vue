<template>
    <h2>Tipo de cuenta: {{cuenta}}</h2>
    <h2>Saldo: {{saldo}}</h2>
    <h2>Cuenta {{ estado ? 'Activa' : 'Desactivada'}} </h2>
    <div v-for="(servicio , index) in servicios" :key="index">
        {{ index + 1 }} - {{ servicio }}
    </div>
    <AccionSaldo 
        texto="Aumentar Saldo"
        @accion="aumentar"
    />
    <AccionSaldo 
        texto="Disminuir Saldo"
        @accion="disminuir"
    />
</template>

<script>
import AccionSaldo from '../AccionSaldo/AccionSaldo.vue';


export default {

    components: {
        AccionSaldo
    },

    data() {
        return {
            cuenta: 'Visa',
            saldo: 1000,
            estado: true,
            servicios: ['giro', 'abono', 'transferencia']
        }
    },
    methods: {
        aumentar() {
            this.saldo = this.saldo + 100;
        },
        disminuir() {
            if(this.saldo === 0) {
                alert('saldo agotado!');
            }
            this.saldo = this.saldo - 100;
        }
    }
}
</script>

<style>

</style>