const app = Vue.createApp({
    data() {

        return {
            titulo: 'Este es un hola mundo con VUEJS',
            cantidad: 499,
            enlace: 'http://youtube.com',
            estado: true,
            cuenta: false,
            servicios: ["transferencias", "gatos" , "activos", "cheques"],
            desactivar: false,
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor) {
            this.cantidad = this.cantidad - valor
            if( this.cantidad <= 0) {
                this.desactivar = true;
            }
            
        }
    }
})