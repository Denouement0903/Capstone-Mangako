<template>
  <div class="contact">
    <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInLeftBig">Contact</h1>

    <!--Section: Contact v.2-->
<section class="mb-4">
  <div class="row">

      <!--Grid column-->
      <div class="col-md-9 mb-md-0 mb-5">
          <form action="https://formspree.io/f/xlevnzeq" id="contact-form" name="contact-form" method="POST" class="w-75 mx-auto bg-dark p-4 rounded-3">

              <!--Grid row-->
              <div class="row">

                  <!--Grid column-->
                  <div class="col-md-6">
                      <div class="md-form mb-0">
                          <input type="text" id="name" name="name" class="form-control">
                          <label for="name" class="">Your name</label>
                      </div>
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-md-6">
                      <div class="md-form mb-0">
                          <input type="text" id="email" name="email" class="form-control">
                          <label for="email" class="">Your email</label>
                      </div>
                  </div>
                  <!--Grid column-->

              </div>
              <!--Grid row-->

              <!--Grid row-->
              <div class="row">
                  <div class="col-md-12">
                      <div class="md-form mb-0">
                          <input type="text" id="subject" name="subject" class="form-control">
                          <label for="subject" class="">Subject</label>
                      </div>
                  </div>
              </div>
              <!--Grid row-->

              <!--Grid row-->
              <div class="row">

                  <!--Grid column-->
                  <div class="col-md-12">

                      <div class="md-form">
                          <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                          <label for="message">Your message</label>
                      </div>

                  </div>
              </div>
              <!--Grid row-->
              <div class="text-center text-md-left">
                  <a class="btn btn-primary m-3" onclick="document.getElementById('contact-form').submit();">Send</a>
              </div>
          </form>

          <div class="status"></div>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-3 text-center bg-dark opacity-75 p-4 rounded-3">
          <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>02 Tokai Road, Cape Town, 7966 </p>
              </li>
              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+27 78 919 3011</p>
              </li>

              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>denorauten@gmail.com</p>
              </li>
          </ul>
      </div>
      <!--Grid column-->

  </div>

</section>
<!--Section: Contact v.2-->
    
  </div>
</template>

<script>
export default {
  name: 'ContactView'
  }
</script>
<style scoped>
</style>

