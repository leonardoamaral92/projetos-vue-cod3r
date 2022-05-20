<template>
  <div>
    <div class="panel">
      <PlayerComponent :life="playerLife" />
      <MonsterComponent :life="monsterLife" />
    </div>
    <div class="panel buttons">
      <template v-if="running">
        <button class="btn atk" v-on:click="action('atk')">Ataque</button>
        <button class="btn spc-atk" v-on:click="action('spc-atk')">Ataque Especial</button>
        <button class="btn heal" v-on:click="action('heal')" :disabled="playerLife === 100">Curar</button>        
        <button class="btn surrender" @click="running = false">Desistir</button>
      </template>
      <button v-else class="btn newgame" v-on:click="startGame">Iniciar jogo</button>
    </div>
    <div v-if="hasWinner" class="panel result">
      <div v-if="monsterLife <= 0" class="win">Você ganhouuu!!! :)</div>
      <div v-if="playerLife <= 0" class="lose">Você perdeeeu =(</div>
    </div>
    <div class="panel-block" v-if="damageHistory.length">
      <p v-for="(damage, index)  in damageHistory" :key="index" :class="`bg-${index % 2 === 0 ? 'monster' : 'player'}`">
        {{ damage }}.
      </p>
    </div>
  </div>
</template>

<script>
import PlayerComponent from './components/PlayerComponent.vue'
import MonsterComponent from './components/MonsterComponent.vue'

export default {
  name: 'App',
  components: {
    PlayerComponent,
    MonsterComponent
  },
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
      damageHistory: [],
      winner: '',
      running: false
    }
  },
  methods: {
    action(act) {
      if (act === 'atk') {
        this.updateLife(Math.ceil(Math.random() * 15), Math.ceil(Math.random() * 10));
      }
      else if (act === 'spc-atk') {
        this.updateLife(Math.ceil(Math.random() * 15) + 5, Math.ceil(Math.random() * 10) + 10);
      }
      else if (act === 'heal') {
        const monsterDamage = Math.ceil(Math.random() * 10);
        this.playerLife -= monsterDamage;
        this.damageHistory.push('Monstro atingiu player com ' + monsterDamage);
        const heal = Math.ceil(Math.random() * 20);
        this.playerLife += heal;

        if (this.playerLife > 100)
          this.playerLife = 100;

        this.damageHistory.push('Player se curou em' + heal);
      }      
    },
    updateLife(monsterDamage, playerDamage) {
      this.playerLife -= monsterDamage;
      this.monsterLife -= playerDamage;
      //unshift coloca sempre no início da lista
      this.damageHistory.unshift('Player atingiu monstro com ' + playerDamage);
      this.damageHistory.unshift('Monstro atingiu player com ' + monsterDamage);      
    },
    startGame(){
      this.playerLife = 100;
        this.monsterLife = 100;
        this.damageHistory.length = 0;
        this.winner = '';
        this.running = true;
    }
  },
  computed: {
    hasWinner() {      
      return this.playerLife <= 0 || this.monsterLife <= 0;
    }
  },
  watch: {
    hasWinner(value){
      if (value) this.running = false;
    }
  }
}
</script>

<style>
.panel {
  border: 1px solid #000; 
  display: flex;
  margin-bottom: 10px;
}

.panel-block {
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 4px;
}

.panel-block p {
  text-align: center;
  color: #fff;
  margin: 3px;
}

/* Buttons */
.buttons {
  display: flex;
  justify-content: center;
}

.btn {
  margin: 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  padding: 10px;
}

.atk {
  background-color: #f15156;
}

.spc-atk {
  background-color: #eec53e;
}

.heal {
  background-color: #35c908;
}

.surrender {
  background-color: #c0c0c0;
}

.newgame {
  background-color: #1301b9;
  color: #fff;
}

/* Logs */

.bg-player {
  background-color: rgb(85, 85, 214);
}

.bg-monster {
  background-color: rgb(255, 100, 80);
}

/* Result  */
.result {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.win {
  color: green;
}

.lose {
  color: red;
}
</style>
