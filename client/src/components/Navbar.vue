<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <span class="navbar-brand">
    <router-link :to="{path: '/'}"><img src="../assets/logo.png" style="max-height: 22px"> Jepretgram</router-link>
    </span>
    <router-link :to="{path: '/login'}">Login</router-link>
  </nav>
</template>

<script>
export default {}
</script>
