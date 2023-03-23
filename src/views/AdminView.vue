<template>
    <div>
        <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInLeftBig">Admin</h1>
 <!-- =============Users Modal==================== -->
<!-- Users Modal -->
<div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- User Button trigger modal -->
<div class="display-4">Users</div>
<button type="button" class="btn btn-primary my-3 d-flex" data-bs-toggle="modal" data-bs-target="#userModal">
  <i class="fa-solid fa-plus"></i>User
  </button>
        <div class="table-responsive">
          <table class="table table-bordered border-danger table-hover bg-dark opacity-75">
            <thead>
              <tr>
                <th scope="col" class="text-light">UserID</th>
                <th scope="col" class="text-light">Name</th>
                <th scope="col" class="text-light">Surname</th>
                <th scope="col" class="text-light">Email</th>
                <th scope="col" class="text-light">Cellphone Number</th>
                <th scope="col" class="text-light">User Profile</th>
                <th scope="col" class="text-light">Edit/Del</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user">
              <tr>
                <td class="text-light">{{ user.userID }}</td>
                <td class="text-light">{{ user.firstName }}</td>
                <td class="text-light">{{ user.lastName }}</td>
                <td class="text-light">{{ user.emailAdd }}</td>
                <td class="text-light">{{ user.cellphoneNumber }}</td>
                <td class="text-light">{{ user.userProfile }}</td>
                <td class="d-flex">
                  <!-- Update User -->
                  <button type="button" class="btn btn-success  m-3 d-flex" data-bs-toggle="modal" data-bs-target="#updateUserModal">
                    <i class="fa-solid fa-pen-to-square"></i>
                   </button>
                   <!-- Delete User-->
                   <button type="button" class="btn btn-danger d-flex m-3">
                    <i class="fa-solid fa-trash" @click="deleteUserByID(user.userID)"></i>
                  </button>                  
                </td>
            </tr>
            </tbody>
          </table>                              
        </div>



 <!-- =================Products======================-->
<!-- ======== New Product ======== -->
<!-- Product Button trigger modal -->
<div class="display-4">Products</div>
<button type="button" class="btn btn-primary my-3 d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i class="fa-solid fa-plus"></i>Product
</button>

<!-- Product Modal -->
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
 
 <!--Product Modal -->
 <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content bg-dark">
       <div class="modal-header">
         <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
         <form>
          <!-- ID -->
          <input class="form-control mb-1" type="text" name="productID" id="productID" placeholder="Current ID" v-model="updateProductByID.productID" required>
          <!-- Name -->
          <input class="form-control mb-1" type="text" name="prodName" id="prodName" placeholder="Edit Name" v-model="updateProductByID.prodName" required>
          <!-- Desc -->
          <input class="form-control mb-1" type="text" name="prodDescription" id="prodDescription" placeholder="Edit Description" v-model="updateProductByID.prodDescription" required>
          <!-- Price -->
          <input class="form-control mb-1" type="text" name="price" id="price" placeholder="Edit price" v-model="updateProductByID.price" required>
          <!-- Quantity -->
          <input class="form-control mb-1" type="text" name="prodQuantity" id="prodQuantity" placeholder="Edit Quantity" v-model="updateProductByID.prodQuantity" required>
          <!-- Genre/Category -->
          <input class="form-control mb-1" type="text" name="category" id="category" placeholder="Edit category" v-model="updateProductByID.category" required>
          <!-- IMG -->
          <input class="form-control mb-1" type="text" name="imgURL" id="imgURL" placeholder="Edit imgURL" v-model="updateProductByID.imgURL">
      </form>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary"  @click="updateProductByID">Save changes</button>
       </div>
     </div>
   </div>
 </div>


        <LoaderComp v-if="!products"/>
        <div class="table-responsive">
          <table class="table table-bordered border-danger table-hover bg-white opacity-75">
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">ProductID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edit/Del</th>
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
                  <td class="d-flex">
                    <!-- Update -->
                    <button type="button" class="btn btn-success  m-3 d-flex" data-bs-toggle="modal" data-bs-target="#updateProductModal">
                      <i class="fa-solid fa-pen-to-square"></i>
                     </button>
                     <!-- Delete -->
                     <button type="button" class="btn btn-danger d-flex m-3">
                      <i class="fa-solid fa-trash" @click="deletedProductByID(product.productID)"></i>
                    </button>                  
                  </td>
              </tr>
              </tbody>
            </table>
        </div>




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
                productID: '',
                moreText: '',
                prodName: '',
                imgURL: '',
                prodDescription: '',
                prodQuantity: '',
                price: ''
            },
            user: {
              userID: '',
              emailAdd: '',
              userPass: '',
              firstName: '',
              lastName: '',
              cellphoneNumber: '',
              gender: '',
              userProfile: ''

            }

        }
    },
    setup(){
        const store = useStore();
        store.dispatch('fetchProducts');
        const products = computed(() => store.state.products);
        store.dispatch('adminGetUsers');
        const users = computed(() => store.state.users);

        let productsInfo = {
                productID: '',
                prodName: '',
                imgURL: '',
                prodDescription: '',
                prodQuantity: '',
                price: ''
        };
        
        let userInfo = {
              userID: '',
              emailAdd: '',
              userPass: '',
              firstName: '',
              lastName: '',
              cellphoneNumber: '',
              gender: '',
              userProfile: ''
        }
        let addUser = async () =>{
          await store.dispatch('adminCreateUser', userInfo)
          alert('User created Successfully')
          location.reload(); 
        };
        
        let addProduct = async () =>{
          await store.dispatch('addProduct', productsInfo);
          alert('Product Created Successfully')
          location.reload();   
        };

        let deleteProductByID = async (productsInfo) =>{
          await store.dispatch('deleteProductByID', productsInfo.productID.splice(0, -1))
        };
        
        let deleteUserByID = async (userInfo) =>{
          await store.dispatch('adminDeleteUser', userInfo.userID.splice(0, -1))
        };
        
        let updatedProductData = {
                productID: '', 
                prodName: '',
                imgURL: '',
                prodDescription: '',
                prodQuantity: '',
                price: ''
        }
        let updateProductByID = async (productID, updatedProductData) => {
            try {
              const response = await store.dispatch('updateProductByID', { productID, updatedProductData });
              alert(`Product with ID ${productID} was successfully updated`)
              console.log(`Product with ID ${productID} was successfully updated:`, response);
            } catch (error) {
              console.error(`Error updating product with ID ${productID}:`, error);
            }
          };
        return{
            productsInfo,
            userInfo,
            users,
            addUser,
            products,
            updatedProductData,
            updateProductByID,
            addProduct,
            deleteProductByID,
            deleteUserByID
        }         
    },
    methods: {
      deletedProductByID(productID) {
        this.$store.dispatch('deleteProductByID', productID)
      },
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