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
          <!-- Checkout -->
          <div class="row">
            <div class="col">
              <!-- <img src="https://i.postimg.cc/qMZnm1gm/jojo-s-bizarre-adventure-part-1-phantom-blood-vol-1.jpg" alt=""> -->
            </div>
            <div class="col">
              <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="card my-4 p-3">
                      <div class="row main">
                        <div class="col-12"><span>Cart</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Shipping confirmation</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Credit card checkout</span></div>
                      </div>
                      
                        <div class="row justify-content-center mrow">
                          <div class="col-12">
                            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="35px" height="35px"/>
                            <img src="https://img.icons8.com/color/48/000000/visa.png" width="35px" height="35px"/>
                            <img src="https://img.icons8.com/color/48/000000/paypal.png" width="35px" height="35px"/>
                          </div>
                        </div>
                        <form class="form-card">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <input type="text" class="form-control p-0" id="number" required><label class="form-control-placeholder p-0" for="number">CardNumber</label>
                           </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <input type="text" class="form-control p-0" id="name" required><label class="form-control-placeholder p-0" for="name">Cardholder'sName</label>
                           </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 col-12">
                            <div class="form-group">
                                <input type="text" class="form-control p-0" id="sdate" required><label class="form-control-placeholder p-0" for="sdate">StartDate</label>
                             </div>
                          </div>
                          <div class="col-sm-4 col-12">
                            <div class="form-group">
                                <input type="text" class="form-control p-0" id="expdate" required><label class="form-control-placeholder p-0" for="expdate">ExpirationDate</label>
                             </div>
                          </div>
                          <div class="col-sm-4 col-12">
                            <div class="form-group">
                                <input type="password" class="form-control p-0" id="passw" required><label class="form-control-placeholder p-0" for="passw">CVV</label>
                          </div>
                          </div>
                        </div>
                        <div class="row lrow mt-4 mb-3">
                          <div class="col-sm-8 col-12"><h3>Grand Total:</h3></div>
                          <div class="col-sm-4 col-12"><h5>&#36;1,449.00</h5></div>
                        </div>
                        <div class="row mb-2">
                          <div class="col-sm-12">
                            <button type="button" class="btn btn-primary btn-block">Pay</button>
                          </div>
                        </div>
                        
                      </form>
                        
                    </div>
                  </div>
              </div>
            </div>
          </div>
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
    .card{
	background: #000;
	color: #fff;
	width: 410px!important;
}
.mrow{
	margin-top: 30px;
	margin-bottom:30px; 
}
img{
	margin-right: 10px;
}
.main span:hover{
	text-decoration: underline;
	cursor: pointer;
}
.mrow img:hover{
	border-bottom: 1px solid #fff;
	cursor: pointer;
}
.btn-primary{
	border: none;
	border-radius: 30px;
}

h5{
	padding-top: 8px;
}

.form-group{
	position: relative;
	margin-bottom: 2rem;
}
.form-control-placeholder{
	position: absolute;
	top: 6px;
	padding: 7px 0 0 10px;
	transition: all 200ms;
	opacity: 0.5;
	color: #dae0e5!important;
	font-size: 75%;
}
.form-control:focus+.form-control-placeholder,
.form-control:valid+.form-control-placeholder{
	font-size: 75%;
	transform: translate3d(0,-100%,0);
	opacity: 1;
	top: 10px;
}
.form-control{
	background: transparent;
	border: none;
	border-bottom: 1px solid #fff!important;
	border-radius: 0;
	outline: 0;
}
.form-control:focus,
.form-control:after{
	outline-width: 0;
	border-bottom: 1px solid #fff!important;
	background: transparent;
	box-shadow: none;
	border-radius: 0;
	color: #dae0e5;
	letter-spacing: 1px;
}
</style>