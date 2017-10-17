<template>
  <div>
    <h1>Greetings!</h1>
    <victim-list v-bind:victims="victims"></victim-list>
  </div>  
</template>

<script charset="utf-8">
import VictimList from './components/VictimList';

export default {
  components: {
    VictimList
  },
  data() {
    return {
      victims: [
        { id: 1, name: 'One'},
        { id: 2, name: 'Two'}
      ]
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>
