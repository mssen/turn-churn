<template>
  <div>
    <h1>Greetings!</h1>
    <p>{{ information }}</p>
  </div>  
</template>

<script charset="utf-8">
export default {
  data() {
    return {
      information: 'Some'
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>
