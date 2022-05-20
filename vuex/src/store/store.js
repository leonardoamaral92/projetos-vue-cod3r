import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

Vue.use(Vuex)

export default new Vuex.Store({
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