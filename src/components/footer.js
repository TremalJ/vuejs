app.component('footer-banco', { //No se recomienda usar camelCase
    props: ['valor', 'fecha'],
    template: /*html*/ `
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{texto}} - {{valor}}</h3>
            <p>{{fecha}}</p>
        </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web dinámico'
        }
    }
})