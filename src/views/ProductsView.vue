<template>
    <div class="products">
      <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">Products</h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="card mb-3" v-for="product in products" :key="product.productID">
            <img :src="product.imgURL" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">{{product.prodDescription}}</p>
              <p class="card-text">{{product.price}}<small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default {
    name: 'ProductsView',
    setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    store.dispatch('fetchProducts');

    return {
      products
    };
  },
    }
  </script>
  
  