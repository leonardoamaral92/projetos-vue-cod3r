export default {
    state: {
        quantidade: 1,
        preco: 5.99
    },    
    //Tem como objetivo alterar o estado central (state)
    mutations: { //"setters"   
        //Neste contexto de modulo o state acessado é do escopo deste modulo
        //Para acessar o state global podemos usar { state, rootState }
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    }
}