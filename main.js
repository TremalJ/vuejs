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
            activar: false,
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo() {
            console.log(this.desactivar);
            console.log(this.cantidad);
            this.cantidad = this.cantidad - 100
            if( this.cantidad <= 0) {
                this.desactivar = true;
            }
            
        }
    }
})