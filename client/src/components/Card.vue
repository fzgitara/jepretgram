<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12" style="padding: 15px" v-for="content in pictures" :key="content">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                  <h5 class="card-title" style="margin: auto">{{content.title}}</h5>
              </div>
              <img class="img-fluid" :src="content.file" data-toggle="modal">
              <div class="card-body">
                <p class="card-text">{{content.caption}}</p>
                <a href="#" class="card-link" style="color: gray">
                  <i class="far fa-heart"></i>
                  <a href="#" class="card-link float-right" style="color: gray">{{content.author}}</a>
                </a>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pictures from '../data/index'
export default {
  data () {
    return pictures
  }
}
</script>

<style>
.card {
  text-align: left !important;
}
</style>
