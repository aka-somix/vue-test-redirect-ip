<script setup lang="ts">
import Header from './views/Header.vue';
import Body from './views/Body.vue';

</script>

<template>
  <Header></Header>
  <Body></Body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
  margin: 0;
  background-color: #f0f0f0;
}

.boxing {
  width: 80%;
  padding: 2rem 0rem;
  box-shadow: 2px 0px 30px #38383840;
}
</style>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
