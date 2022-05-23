<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import Stock from './Stock.vue'

export default {
    name: 'StocksApp',
    components: { Stock },
    data(){
        return {
            stocks: [
                { id: 1, name: 'Amazon', price: 110 },
                { id: 2, name: 'Google', price: 200 },
                { id: 3, name: 'Apple', price: 280 },
                { id: 4, name: 'Twitter', price: 83 }
            ]
        }
    }

}
</script>

<style scoped>

</style>