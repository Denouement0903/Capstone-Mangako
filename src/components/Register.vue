<template lang="">
    <div>
      <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">Register</h1>

      <section class="w-75 mx-auto my-5">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-light bg-dark" style="border-radius: 25px;">
                <div class="card-body p-md-5 my-auto mx-auto">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form class="mx-1 mx-md-4">

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control" v-model="payload.firstName" name="firstName" required />
                            <label class="form-label" for="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control" v-model="payload.lastName" name="lastName" required />
                            <label class="form-label" for="form3Example1c">Your Surname</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" v-model="payload.emailAdd" name="emailAdd" required/>
                            <label class="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" v-model="payload.userPass" name="userPass" required/>
                            <label class="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control" v-model="payload.userPass" name="userPass"/>
                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-danger btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div class=" col-8 col-md-8 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://i.postimg.cc/cLp2fvr5/berserk-guts.gif"
                        class="img-fluid mx-auto rounded-5" alt="Sample image" loading="lazy">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
    name: 'RegisterComp',
    setup(){
      const store = useStore();
      let payload = {
        firstName: '',
        lastName: '',
        emailAdd: '',
        userPass: '',        
      };
      const registerUser = (payload)=> {
        store.dispatch("register", payload);
        //To refresh
        store.dispatch("fetchUsers");
    };
    const message =
    computed( ()=>store.state)
    return {
        payload,
        message,
        registerUser
    }
      
    }
}
</script>
<style lang="">
    
</style>