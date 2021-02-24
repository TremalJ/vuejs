export default{
    namespaced: true,
    state: {
        contador: 0,
    },
    mutations: {
        aumentarContador(state, payload) {
            state.contador = state.contador + payload;
            console.log(state.contador)
        }
    },
    actions: {

    },
    getters: {

    },
    
}