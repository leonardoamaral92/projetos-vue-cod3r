<template>
    <div @click="$emit('taskStateChanged', task)"
        class="task" :class="stateClass">
        <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: { type: Object, required: true }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }    
}
</script>

<style scoped>
.task {
    box-sizing: border-box; /*Considerar o padding e border como altura e largura */
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none; /*Usuário não pode selecionar o texto */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.task p {
    margin: 5px 10px;
}

.btn-remove {
    display: flex;
    margin: 0;
    border-radius: 10px;
}

.pending {
    border-left: 12px solid #B73229;
    background-color: #F44336;
}

.done {
    color: #ddd;
    border-left: 12px solid #0A8F08;
    background-color: #4CAF50;
    text-decoration: line-through;
}

.pending .close{
    background-color: #B73229;
}

.done .close{
    background-color: #0A8F08;
}

.close{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}
</style>