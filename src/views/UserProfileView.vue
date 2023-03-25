<template>
    <div class="userProfile">
        <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">User Profile</h1>

      <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img loading="lazy" src="https://i.postimg.cc/3NBHqZ4x/dfkbesy-12deddd4-b46d-4167-b756-b77abe6496e7-removebg-preview.png" alt=""/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                    Deno Rautenbach
                                </h5>
                                <h6>
                                    Web Developer and Designer
                                </h6>
                                <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>3</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Username</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>useri@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>           
    </div>
    </div>
  </template>
  
  <script>
//   import {computed} from '@vue/runtime-core';
//   import {useStore} from 'vuex';
  export default {
    name: 'UserProfileView',
    // setup() {
    //     const store = useStore();
    //     store.dispatch('adminGetUsers');
    //     const users = computed(() => store.state.users);
    //     return{
    //         users
    //     }
    // }
  };
  </script>
  <style scoped>
  .emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background-image: url('https://i.postimg.cc/pd3gTSbS/tumblr-3afcbe17f19ae8eb95e43868daaebeb1-54a8b898-500.gif');
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    background-attachment: fixed;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
  </style>