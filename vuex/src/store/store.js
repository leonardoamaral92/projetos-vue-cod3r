import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    //getters, //caso você não tenha getters
    //ou assim caso você já tenha getters
    getters: {
        ...getters
        //Outros getters...
    },
    modules: { carrinho, parametros }
    //Os getters, mutations e actions serão importados para dentro do store do mesmo jeito que era antes
    //Mas o state ficará diferente, pois ele reconhecerá os modulos como objetos assim:
    // state: {
    //     carrinho: {
    //         produtos: []
    //     },
    //     parametros: {
    //         quantidade: 0,
    //         preco: 0
    //     }
    // },        
})