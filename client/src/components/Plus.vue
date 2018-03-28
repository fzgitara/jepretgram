<template>
  <div>
    <div class="zoom">
      <a class="zoom-fab zoom-btn-large" id="zoomBtn" data-toggle="modal" data-target="#plusmodal"><i class="fas fa-plus" style="color: white"></i></a>
    </div>
    <div class="modal fade" id="plusmodal" tabindex="-1" role="dialog" aria-labelledby="plusmodalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Post New Picture</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="inputTitle">Title</label>
                <input type="text" class="form-control" id="inputTitle" aria-describedby="emailHelp" placeholder="Enter title">
              </div>
              <div class="form-group">
                <label for="inputCaption">Caption</label>
                <input type="text" class="form-control" id="inputCaption" aria-describedby="emailHelp" placeholder="Enter caption">
              </div>
              <div class="form-group">
                <span>Your art: </span><br>
                <input @change="inputFile" type="file">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="upload">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.modal-body {
  text-align: left !important;
}

.zoom {
    position: fixed;
    bottom: 24px;
    right: 24px;
    height: 70px;
}

.zoom-fab {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background-color: #00a1de;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    transition: 0.2s ease-out;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: #FFF;
}

.zoom-fab:hover {
    background-color: #7cd8fa;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

.zoom-btn-large {
    width: 60px;
    height: 60px;
    line-height: 60px;
}

.zoom-menu {
    position: absolute;
    right: 70px;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 500px;
    list-style: none;
    text-align: right;
}

.zoom-menu li {
    display: inline-block;
    margin-right: 10px;
}

.zoom-card {
    position: absolute;
    right: 150px;
    bottom: 70px;
    transition: box-shadow 0.25s;
    padding: 24px;
    border-radius: 2px;
    background-color: #009688;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    color: #FFF;
}

.zoom-card ul {
    -webkit-padding-start: 0;
    list-style: none;
    text-align: left;
}

.scale-transition { transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important; }

.scale-transition.scale-out {
    transform: scale(0);
    transition: transform 0.2s !important;
}

.scale-transition.scale-in { transform: scale(1); }
</style>
