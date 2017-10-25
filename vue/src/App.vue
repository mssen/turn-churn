<template>
  <div class="main-container">
    <h1 class="title">
      Turn<em class="fancy">Churn</em>
    </h1>

    <add-victim v-on:add-victim="addVictim"></add-victim>
    <victim-list :victims="victims" @delete-victim="deleteVictim"></victim-list>

    <div v-show="victims.length > 0" class="submit-container">
      <button class="clear-button" @click="clear">Clear it!</button>
      <button class="submit-button" @click="submit">Churn it!</button>
    </div>
  </div>  
</template>

<script charset="utf-8">
import AddVictim from './components/AddVictim';
import VictimList from './components/VictimList';

export default {
  components: {
    AddVictim,
    VictimList
  },
  data() {
    return {
      victims: [],
      nextId: 1
    }
  },
  methods: {
    addVictim(victimName) {
      this.victims.push({ id: this.nextId++, name: victimName });
    },
    deleteVictim(victim) {
      const victimIndex = this.victims.indexOf(victim);
      this.victims.splice(victimIndex, 1);
    },
    clear() {
      this.victims = [];
    },
    submit() {
      const ids = Object.keys(this.victims);
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      const theChosen = this.victims[randomId];
      alert(`It's ${theChosen.name}'s turn!`);
      this.clear();
    }
  }
}
</script>

<style>
/* Colors: https://coolors.co/2d3142-4f5d75-bfc0c0-ffffff-ef8354 */

body {
  margin: 0;
  padding: 0;
  color: #2D3142;
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  font-size: 50px;
}

.fancy {
  color: #EF8354;
}

.main-container {
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 100vh;
  background: white;
}

.submit-container {
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
}

.clear-button, .submit-button {
  cursor: pointer;
  border: 2px solid #EF8354;
  border-radius: 2px;
  padding: 10px 15px;
}

.clear-button {
  color: #EF8354;
  background: white;
}

.submit-button {
  color: white;
  background: #EF8354;
}
</style>
