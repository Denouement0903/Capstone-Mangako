<template lang="">
    <div>
        <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">Cart</h1>
        <table class="table table-bordered border-danger table-hover bg-white opacity-75">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            <th colspan="2" class="table-active">Total:</th>
            <td colspan="2"></td>
            </tbody>
          </table>
          <!-- Button trigger modal -->
<button type="button" class="btn btn-success m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Checkout
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success">Confirm</button>
        </div>
      </div>
    </div>
  </div>
  
    </div>
</template>
<script>
export default {
    name: 'CheckoutComp'
}
</script>
<style scoped>
    
</style>