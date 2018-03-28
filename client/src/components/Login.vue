<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4"><img src="../assets/logo.png" style="max-height: 64px" alt=""> Jepretgram</h1>
      <hr>
      <form>
        <div class="form-group">
          <label for="inputEmail">Email or username</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email or username">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <hr>
        <small id="register" class="form-text text-muted">Don't have account? Register <router-link :to="{path: '/register'}"><a>here</a></router-link></small>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.jumbotron {
  margin-top: 3rem;
}
</style>
