<template>
    <div class="products">
      <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">Products</h1>
      <LoaderComp v-if="!products"/>
      <div class="container-fluid p-5 m-5">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="card m-2 border border-" style="width: 18rem;" v-for="product in products" :key="product.productID">
               <img :src=product.imgURL class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{product.prodName}}</h5>
                <p class="card-text">{{product.category}}</p>
                <p class="card-text">R{{product.price}}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LoaderComp from '@/components/Loader.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default {
    name: 'ProductsView',
    components: {
      LoaderComp
    },
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
  <style scoped>
    h5, p {
      color: black
    }
    img {
      height: 350px;
    }

  </style>
  
  