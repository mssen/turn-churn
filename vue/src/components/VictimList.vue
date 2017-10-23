<template>
  <ul class="victim-list">
    <li class="victim" v-for="victim in victims" :key="victim.id">
      {{ victim.name }}
      <button class="victim-delete" @click="deleteVictim(victim)">✕</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['victims'],
  methods: {
    deleteVictim(victim) {
      this.$emit('delete-victim', victim);
    }
  }
}
</script>

<style>
.victim-list {
  margin: 30px 0;
  padding: 0;
  list-style: none;
}

.victim {
  display: flex;
  width: 250px;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
}

.victim-delete {
  background: transparent;
  cursor: pointer;
  border: 0;
}

.victim-delete:hover {
  border-radius: 2px;
  color: white;
  background: #A51616;
}
</style>
