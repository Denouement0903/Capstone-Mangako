<template>
  <div>
    <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">Single Product</h1>
    <LoaderComp v-if="!product"/>
    <div class="card mb-3 w-75 bg-dark mx-auto" v-if="product">
      <div class="row g-0">
        <div class="col-md-6">
          <img loading="lazy" :src="product.imgURL" class="img-fluid m-1 rounded-start" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <a @click.prevent="returnToProducts"><img class="icon" height="50" loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSElEQVR4nO2az04UQRDGfycXDxpMFLzJ0QOc8CbeDMREI0f+PAOB8BaABw0mhiuPIKzKGxDjWdg/J8E1EPAsQijTSZlslpmdmZ7umR7Cl3zJbHantr5UT3VV9cANri/uAdPAGlAH9oHfwJnSXO/pd+Y3r4FBAkENmAd2gAtAMtLc8xmYU1uF4zawDPy0cD6Oh8ASMFCUiBdA26GAXraAKZ8CTOjfeRTQy02NvFMMA98KFCHKr8CQKxEjGm4piU31IRceaBqVktkGHtqKGChpOUmfZWaVoj8E4Lz0cN0mxUqgnEwrwoSvEYDDEsNW2k1zOQBnJYGLaaJxGICjksCDpAd/PucfHAHjwEQBYmb7CdnJKWJU7TwpQMinfv3EhQMRo/rZt5Bz4G6UkGlLg8fAmNp4DPwqQIQoX0YJeVORSEgXV6OE1CsUCVF+jBLSrFAkRGkK2is4rVAkpMuXKzhLebNJrb7xNKUvf0IX8iyPENul1QltaTUq+LDv+Ui/nVDS75qFobIjs+KzROmUXaIMVqxo/BtXNBp8qVAZv00fzOU0fqQi0u4DeThzXVrdWyRgKQBHJYELSSL+RyWEManEsJll4jgVgMMSwUvgORnxPgDHpYdvsUBNB8cSCHfTPOBxuB/QscIwOTGSsQ12zQbwCEcYKmmZ7ephk5fD0MuCRGz4Pnuf9LzU9m1SrC1qOto/cCjgh+7YpbwBUdOpeF1nsVmdP9cqdiZPanUN0xu80jHmlvbTJ10v1Zjr79qermhTdMe5FzcgDPwDzOEXEz5EkHIAAAAASUVORK5CYII=">
            </a>
            <h3 class="card-title">{{ product.prodName }}</h3>
            <h4 class="card-text"><span class="text-danger">Price: </span> <br> R{{ product.price }}</h4>
            <h5 class="card-text"><span class="text-danger">Genre: </span> <br> {{ product.category }}</h5>
            <h6 class="card-text"><span class="text-danger"> Description: </span> <br> {{ product.prodDescription }}</h6>
            <button type="button" class="btn btn-primary btn-lg m-2 p-2">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderComp from './Loader.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'SingleProductComp',
  methods: {
    returnToProducts() {
    this.$router.push("/products");
  },
},
  components: {
    LoaderComp
  },
  setup() {
    const store = useStore();
    const product = computed(() => store.state.product);
    return {
      product
    }
  },
  mounted() {
    this.$store.dispatch('fetchProductByID', this.$route.params.productID)
  }
};
</script>

<style scoped>
.img-fluid {
  height: 700px;
}
.icon{
  margin-left: 90%;
  transition: all .2s ease-in-out;
}
.icon:hover {
  transform: scale(1.3); 
}
</style>





