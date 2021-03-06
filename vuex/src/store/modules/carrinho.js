export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        //Centralizamos a lógica que existia nos componentes Resumo e Carrinho aqui
        //Desta forma só precisamos alterar em um lugar algo que pode ser usado em vários lugares        
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    //Tem como objetivo alterar o estado central (state)
    mutations: { //"setters"
        //Em cada mutation só podemos passar 1 parâmetro adicional (produto)
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        }
    },
    //Action é usada para inserir regras de negócios podendo acessar várias mutations
    actions: {
        //Exemplo 1
        // adicionarProduto(context, payload){
        //     //Simulação de uma chamada assíncrona 1s de resposta
        //     setTimeout(() => {
        //         context.commit('adicionarProduto', payload)
        //     }, 1000)
        // }
        //Desta forma  action é colocada no raiz, mesmo o modulo tendo namespace
        adicionarProduto: {
            root: true,
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    }
}
    