<template>
    <div>
        <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInLeftBig">Admin</h1>
<!-- ======== New Product ======== -->
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary my-3 d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-plus"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input class="form-control mb-1" type="text" name="prodName" id="prodName" placeholder="Name" v-model="productsInfo.prodName" required>

            <input class="form-control mb-1" type="text" name="prodDescription" id="prodDescription" placeholder="Description" v-model="productsInfo.prodDescription" required>

            <input class="form-control mb-1" type="text" name="price" id="price" placeholder="price" v-model="productsInfo.price" required>

            <input class="form-control mb-1" type="text" name="prodQuantity" id="prodQuantity" placeholder="Quantity" v-model="productsInfo.prodQuantity" required>
            
            <input class="form-control mb-1" type="text" name="category" id="category" placeholder="category" v-model="productsInfo.category" required>

            <input class="form-control mb-1" type="text" name="imgURL" id="imgURL" placeholder="imgURL" v-model="productsInfo.imgURL">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  @click="addProduct" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>


<!-- ========= Update Product ======== -->



        <LoaderComp v-if="!products"/>
        <table class="table table-bordered border-danger table-hover bg-white opacity-75">
            <thead>
              <tr>
                <th scope="col">Preview</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Genre</th>
                <th scope="col">Quantity</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product">
              <tr>
                <td><img class="w-25" :src=product.imgURL></td>
                <td>{{ product.productID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.prodQuantity }}</td>
                <td class="p-3">
                    <button class="btn btn-success m-3" type="button" id="myBtn" @click="toggleText(product)">{{ product.btnText || 'More/Less' }}</button>
                    <span id="dots" v-show="product.dotsVisible"></span>
                    <span id="more" v-show="product.moreVisible"></span><br>{{ product.moreText }}...
                </td>
                <td>{{ product.price }}</td>
            </tr>
            </tbody>
          </table>

    </div>
</template>
<script>
import LoaderComp from '@/components/Loader.vue';
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
export default {
    name: 'AdminView',
    components: {
        LoaderComp
    },
    data(){
        return {
            product: {
                dotsVisible: true,
                moreVisible: false,
                btnText: 'More/Less',
                moreText: '',
                prodName: '',
                imgURL: '',
                prodDescription: '',
                prodQuantity: '',
                price: ''
            }
        }
    },
    setup(){
        const store = useStore();
        store.dispatch('fetchProducts');
        const products = computed(() => store.state.products);

        let productsInfo = {
                prodName: '',
                imgURL: '',
                prodDescription: '',
                prodQuantity: '',
                price: ''
        };

        let addProduct = async () =>{
        await store.dispatch('addProduct', productsInfo);
        alert('Product Created Successfully')
        location.reload();   
        }

        return{
            productsInfo,
            products,
            addProduct
        }         
    },
    methods: {
    toggleText(product) {
      product.dotsVisible = !product.dotsVisible;
      product.btnText = product.dotsVisible ? 'More/Less' : 'More/Less';
      product.moreVisible = !product.moreVisible;
      if (product.moreVisible) {
        product.moreText = product.prodDescription;
      } else {
        product.moreText = '';
      }
    },   
    },
    mounted() {
        this.product.moreText = this.product.prodDescription;
    }
}
</script>
<style scoped>

</style>