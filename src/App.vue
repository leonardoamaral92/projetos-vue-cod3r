<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgressVue :progress="progress" />
		<NewTask @taskAdded="addTask"/>
		<TaskGrid :tasks="tasks"
			@taskDeleted="deleteTask"
			@taskStateChanged="finishTask" />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue';
import NewTask from './components/NewTask.vue';
import TaskProgressVue from './components/TaskProgress.vue';

export default {
	components: {
		TaskGrid,
		NewTask,
		TaskProgressVue
	},
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},	
	methods: {
		addTask(task){
			//Funcao de comparação de um nome (return true or false)
			const sameName = t => t.name === task.name	
			//Filtra um array baseado numa função de comparação, tamanho 0 -> nenhum match
			const reallyNew = this.tasks.filter(sameName).length == 0;
			//Só adiciona nova tarefa se não existir outra com mesmo nome
			if (reallyNew){				
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i){
			//Deletar 1 elemento a partir do índice i
			this.tasks.splice(i, 1);
		},
		finishTask(i){
			this.tasks[i].pending = !this.tasks[i].pending;
		}
	},
	watch: {
		//Dessa forma, o watch consegue executar quando adicionamos ou removemos um item do array, 
		//mas não quando o estado de algum elemento muda, como por exemplo finalizar tarefas (pending)
		// tasks() {
		// 	localStorage.setItem('tasks', JSON.stringify(this.tasks));
		// }
		//Para isso vamos utilizar o watch mais profundo
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	},
	created() {
		const json = localStorage.getItem('tasks');
		this.tasks = JSON.parse(json) || []
	}
}
</script>

<style>
body {
	font-family: 'Lato', sans-serif;
	background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
	color: #FFF;
}

#app {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#app h1 {
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 3rem;
}
</style>
