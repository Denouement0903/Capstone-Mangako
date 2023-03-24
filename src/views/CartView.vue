<template>
    <div>
      <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInLeftBig">Cart</h1>
      <table v-for="product in cartProducts" :key="product.productID" class="table table-bordered border-danger table-hover bg-white opacity-75">
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
            <td class="text-dark">{{product.id}}</td>
            <td class="text-dark">{{product.name}}</td>
            <td class="text-dark">{{product.quantity}}</td>
            <td class="text-dark">{{product.price}}</td>
          </tr>
        <th colspan="2" class="table-active">Total:</th>
        <td colspan="2"></td>
        </tbody>
      </table>  
      <CheckoutComp/>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import CheckoutComp from '../components/Checkout.vue'
export default {
  name: 'CartView',
  components: {
    CheckoutComp
  },
  computed: {
    ...mapGetters(['cartProducts']),
  },
}
</script>
  
  