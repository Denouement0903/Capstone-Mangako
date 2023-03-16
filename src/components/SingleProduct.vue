<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;" v-if="product">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.imgURL" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">{{ product.prodName }}</h3>
            <h4 class="card-text">R{{ product.price }}</h4>
            <p class="card-text">{{ product.category }}</p>
            <h6 class="card-text">{{ product.prodDescription }}</h6>
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
  name: 'SingleProductComp',
  props: {
    productID: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const product = computed(() => store.state.products.find(p => p.id === props.productID));

    store.dispatch('fetchProductByID');

    return {
      product
    }
  }
};
</script>

<style scoped>

</style>
