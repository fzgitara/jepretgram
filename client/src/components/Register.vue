<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4"><img src="../assets/logo.png" style="max-height: 64px" alt=""> Jepretgram</h1>
      <hr>
      <form>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputUsername">Username</label>
          <input type="text" class="form-control" id="inputUsername" aria-describedby="usernameHelp" placeholder="Enter username">
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
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
