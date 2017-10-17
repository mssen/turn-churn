<template>
  <ul>
    <li v-for="victim in victims" :key="victim.id">{{ victim.name }}</li>
  </ul>  
</template>

<script>
export default {
  props: ['victims']
}
</script>

<style>

</style>
