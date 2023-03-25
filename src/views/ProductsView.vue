<template>
    <div class="products">
      <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">Products</h1>
      <LoaderComp v-if="!products"/>
      <div class="row">
        <div class="filter col-sm-4 m-3">
          <div class="dropdown">
            Filter By
            <button id="filter dropdownMenuButton2" @click="sortCategory()" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Genre
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li class="dropdown-item" @click="sortCategory('Action Adventure')">Action Adventure</li>
              <li class="dropdown-item" @click="sortCategory('Samurai')">Samurai</li>
              <li class="dropdown-item" @click="sortCategory('Sci-Fi')">Sci-Fi</li>
              <li class="dropdown-item" @click="sortCategory('Thriller')">Thriller</li>
              <li class="dropdown-item" @click="sortCategory('Gore')">Gore</li>
              <li class="dropdown-item" @click="sortCategory('Demi-Humans')">Demi-Humans</li>
              <li class="dropdown-item" @click="sortCategory('Action')">Action</li>
              <li class="dropdown-item" @click="sortCategory('Comedy')">Comedy</li>
              <li class="dropdown-item" @click="sortCategory('Zombies')">Zombies</li>
              <li class="dropdown-item" @click="sortCategory('Horror')">Horror</li>
            </ul>
          </div>
      </div>
      <div class="sort col-sm-4 m-3">
        Sort By
        <button id="sort" @click="sortPrice" class=" btn btn-secondary"><i class="bi bi-arrow-down"></i>Price<i class="bi bi-arrow-up"></i></button>
        Highest/Lowest</div>
      <div class="search col-4">
        <input class="filter-input rounded-3" id="search" v-model="searching" type="text" placeholder="Search">
    </div>
      </div>
      <div class="container-fluid p-5 mx-auto">
        <div class="row d-flex justify-content-center align-items-center" v-if="filtering">
            <div class="col-md-3 card border-danger bg-dark m-2" style="width: 16rem;" v-for="product in filtering" :key="product.productID">
               <img loading="lazy" :src=product.imgURL class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light"><span class="text-danger">Title: </span>{{product.prodName}}</h5>
                <p class="card-text text-light"><span class="text-danger">Genre: </span>{{product.category}}</p>
                <p class="card-text text-light"><span class="text-danger">Price: </span>R {{product.price}}</p>
                <div class="row">
                  <button type="button" class="btn btn-primary btn-lg m-2 p-2" @click="addToCart(productID)">Add to Cart</button>
                  <button type="button" class="btn btn-danger btn-lg m-2 p-2"  @click="useProductID(productID)">
                    <router-link :to="{ name: 'singleProduct', params: { productID: product.productID } }">
                      View Product</router-link></button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import LoaderComp from '@/components/Loader.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
    name: 'ProductsView',
    props: ['productStorez'],
    components: {
      LoaderComp
    },
    data() {
      return {
        loader: true,
        searching: ''
      }
    },
    setup() {
      const store = useStore();
      const product = computed(() => store.state.products);

      store.dispatch('fetchProducts');


      return {
        product,
        useProductID() {
          store.dispatch('fetchProductByID', product.value);
        },
        sortBy: 'name',
        filterBy: 'all',
        searchQuery: '',
        categories: ['Action Adventure', 'Samurai', 'Sci-Fi', 'Thriller', 'Gore', 'Demi-Humans', 'Action', 'Zombies', 'Comedy', 'Horror']
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      filtering() {
        if (this.searching.trim().length > 0) {
          return this.products.filter((name) => name.prodName.toLowerCase().includes(this.searching.trim()))
        }
        return this.products
      }
    },
    methods: {
  sortPrice() {
    this.$store.commit("sortProductsPrice");
  },
  sortCategory(categories) {
    this.$store.commit('filtering', categories);
  },
  addToCart(productID) {
    this.$store.dispatch('addToCart', productID);
  },
  ...mapActions(['addToCart'])
}
  }
</script>

  <style scoped>
  .dropdown .dropdown.dropdown-item.disabled {
    color: #adb5bd;
    pointer-events: auto;
  }
    h5, p {
      color: black
    }
    img {
      height: 300px;
    }
  .card{
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  }
    .card:hover{
      transform: scale(1.05);
      box-shadow: 0px 10px 10px 10px rgb(0, 0, 0), 0 4px 8px rgba(0,0,0,.06);
    }

  </style>
  
  