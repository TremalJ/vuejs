app.component('footer-banco', { //No se recomienda usar camelCase
    data: ['cantidad', 'fecha'],
    template: /*html*/ `
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{texto}}</h3>
            <p>{{fecha}}</p>
        </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web dinámico'
        }
    }
})