<template>
  <div class="add-container">
    <input
      v-model="victim"
      @keyup.enter="addVictim"
      class="victim-input"
      type="text"
      placeholder="The next victim..."
      autoFocus />
    <button class="add-button" @click="addVictim">+ Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      victim: ''
    }
  },
  methods: {
    addVictim() {
      this.$emit('add-victim', this.victim);
      this.victim = '';
    }
  }
}
</script>

<style>
.add-container {
  display: flex;
}

.add-button, .victim-input {
  border: 2px solid #4F5D75;
}

.victim-input {
  flex: 1;
  border-right: 0;
  border-radius: 2px 0 0 2px;
  padding: 10px 15px;
}

.add-button {
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  color: white;
  background: #4F5D75;
}
</style>
