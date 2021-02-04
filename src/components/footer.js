app.component('footer-banco', { //No se recomienda usar camelCase
    template: /*html*/ `
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{texto}} - {{cantidad}}</h3>
        </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web dinámico',
            cantidad: 1000
        }
    }
})