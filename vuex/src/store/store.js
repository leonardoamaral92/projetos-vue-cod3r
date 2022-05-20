import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: []
    },
    getters: {
        //Centralizamos a lógica que existia nos componentes Resumo e Carrinho aqui
        //Desta forma só precisamos alterar em um lugar algo que pode ser usado em vários lugares        
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }
})