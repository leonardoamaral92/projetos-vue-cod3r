<template>
    <div class="new-task">
        <input class="form-element" placeholder="Nova tarefa ?"
            type="text" v-model="nameTask" @keydown.enter="add">
        <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
export default {    
    data() {
        return {
            nameTask: ''
        }
    },
    methods: {
        add() {
            //Estamos trabalhando com emissão de eventos para que o dono do dado faça a modificação
            //No caso é o 'App.vue' que possui a lista de tarefas, então ele deve interceptar esse evento            
            this.$emit('taskAdded', { name: this.nameTask })
            this.nameTask = '';
        }
    }
}
</script>

<style scoped>
.new-task{
    margin: 35px;
}

.form-element{
    outline: none;
    font-size: 2rem;
    border: 1px solid #FFF;
    padding: 5px 10px 8px;
    color: #FFF;
}

input.form-element{
    width: 500px;
    background: #FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

button.form-element{
    border-left: none;
    background-color: #2196F3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>