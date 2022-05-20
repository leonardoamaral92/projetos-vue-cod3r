<template>
  <div class="score">
    <h1>Monstro</h1>
    <LifeBar :value="life" />
    <p>{{life}}%</p>
  </div>
</template>

<script>
import LifeBar from './LifeBar.vue';

export default {
  name: 'MonsterComponent',  
  props: {
    life: Number
  },
  components: {
    LifeBar
  }  
}
</script>

<style scoped>
.score{    
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
