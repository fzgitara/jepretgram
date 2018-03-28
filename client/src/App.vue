<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Plus></Plus>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Plus from '@/components/Plus'
export default {
  name: 'App',
  components: {
    Navbar,
    Plus
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
