<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    methods: {
        //Outra forma de acessar o setters (dentro de methods)
        //Usamos operador spread(...) para que o resultado gere métodos
        //É como se estivéssemos importando o método 'adicionarProduto'
        //...mapMutations(['adicionarProduto']),
        //Trabalhando com Actions muito semelhante a mutations
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            //Alterando diretamente o objeto do store
            //this.$store.state.produtos.push(produto)

            //Acionando diretamente o mutation
            //this.$store.commit('adicionarProduto', produto);

            //Acessando depois do mapMutations ou mapActions
            //this.adicionarProduto(produto);

            //Nâo precisa usar o mapActions
            this.$store.dispatch('adicionarProduto', produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
