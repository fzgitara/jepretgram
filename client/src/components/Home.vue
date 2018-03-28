<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"><img src="../assets/logo.png" style="max-height: 64px" alt=""> Jepretgram</h1>
        <p class="lead">It's your time to show the world your amazing capture</p>
      </div>
    </div>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/Components/Card'
export default {
  components: {
    Card
  }
}
</script>

<style>
.jumbotron {
  background: url(https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94616ccf14e7ed3eb6fe9afeb953aec3&auto=format&fit=crop&w=1050&q=80);
  margin-top: 3rem;
  background-size: cover;
  color: rgb(51, 50, 50);
  text-shadow: 2px 2px 4px white;
}
</style>
