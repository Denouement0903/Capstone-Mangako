import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()

// const backendLink = "http://localhost:3500/"
const backendLink = "https://mangako.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    loader: true,
    loggedInUser: null,
    category: null,
    cart: null
  },
  // getters: {
  // cartProducts: (state, getters, rootState) => {
  //   return state.cart.map(item => {
  //     const product = rootState.products.find(product => product.id === item.productID);
  //     return {
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       quantity: item.quantity
  //     };
  //   });
  // }},
  mutations: {

    // addProductToCart(state, productID, quantity) {
    //   const itemIndex = state.cart.findIndex(item => item.productID === productID);
  
    //   if (itemIndex === -1) {
    //     state.cart.push({ productID: productID, quantity: quantity });
    //   } else {
    //     state.cart[itemIndex].quantity++;
    //   }
    // },
    setCart(state, value){
      state.cart = value
    },
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setLoader(state, value) {
      state.showLoader = value
    },
    setMessage(state, value) {
      state.message = value
    },
    clearUsers(state) {
      state.users = null
    },
    clearUser(state) {
      state.user = null
    },
    clearProducts(state) {
      state.products = null
    },
    clearProduct(state) {
      state.product = null
    },
    sortProductsPrice: (state) => {
      state.products.sort((a, b)=> {
        return a.price - b.price;
      })
      if(!state.asc) {
        state.products.reverse()
      }
      state.asc =!state.asc
    },
    setLoggedInUser(state, values) {
      state.message = values
    },
    setFilteredProducts(state, category) {
      state.selectedCategory = category;
  }
},
  actions: {
    async login(context, payload){
      // {withCredentials: true}
      const res = await axios.post(`${backendLink}login`, payload);
      const {result, err, jwToken} = await res.data;
      console.log("Token: ", jwToken);
      console.log("result: ", result);
      if (result) {
        context.commit('setUser', result[0]);
        cookies.set('LegitUser', jwToken);
        console.log(result[0]);
      }
      else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${backendLink}register`, payload);
      const { result, err, jwToken } = await res.data;
      console.log("Token: ", jwToken);
      console.log("result: ", result);
      if (result) {
        context.commit('setUser', result[0]);
        cookies.set('LegitUser', jwToken);
        console.log(result[0]);
      }
      else {
        context.commit('setMessage', err);
      }
    },    
    async adminGetUsers(context) {
      const response = await axios.get(`${backendLink}users`);
      try {
        context.commit('setUsers', response.data.results);
        console.log(response);
      } catch (error) {
        context.commit('setMessage', error.message);
        console.log(response);
      }
    },
    async adminCreateUser(context, payload) {
      let res = await axios.post(`${backendLink}user/`, payload);
      let {msg, err}  = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    async adminUpdateUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.post(`/admin/${user.userID}`, user)
        dispatch('user')
      }
    }, 
    async adminDeleteUser(context, userID){
      const res = await axios.delete(`${backendLink}user/${userID}`);
      const{msg, err} = await res.data;
      if (msg) {
        context.commit('setUsers', msg[0])
        console.log(msg);
        this.dispatch('adminGetUsers');
      } else {
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context) {
      const response = await axios.get(`${backendLink}products`);
      try {
        context.commit('setProducts', response.data.results);
        console.log(response);
      } catch (error) {
        context.commit('setMessage', error.message);
        console.log(response);
      }
    },
    async fetchProductByID(context, productID){
      // , {withCredentials: true}
      const res = await axios.get(`${backendLink}product/${productID}`);
      const {err,results} = await res.data;
      if(results){
        context.commit('setProduct', results[0]);
        context.commit('setLoader', false);
      } else context.commit('setMessage', err);
    },
    async addProduct(context, payload) {
      let res = await axios.post(`${backendLink}product/`, payload);
      let {msg, err}  = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    async updateProductByID(context, payload) {
      const res = 
      await axios.put(`${backendLink}product/${payload.productID}`, payload);
      const {msg, err} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', msg || err)
      }
    },
    async deleteProductByID(context, productID) {
      const res = await axios.delete(`${backendLink}product/${productID}`);
      const {err, msg} = await res.data;
      if(msg) {
        context.commit('setProducts', msg[0])
        console.log(msg);
          this.dispatch('fetchProducts');
      } else {
        context.commit('setMessage', err);
      } 
      
    },
    async getCartProducts(context, userID) {
      // try {
      //   const response = await axios.get(`${backendLink}cart/${userID}`);
      //   context.commit('setCart', response.data.items);
      //   console.log(response);
      // } catch (error) {
      //   context.commit('setMessage', error.message);
      //   console.log(error);
      // }
      const res = await axios.get(`${backendLink}cart/${userID}`);
      const{err,results} = await res.data;
      if(results){
        console.log(results);
        context.commit('setCart', results)
      } else {
        console.log(err);
        context.commit('setMessage', err)
      }
    },
    async addToCart(context, payload, userID){
      
      const res = await axios.post(`${backendLink}cart/${userID}/products`, payload)
      const {err,results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
    async updateCart(context, payload){
      const res = await axios.post(`${backendLink}cart`, payload)
      const {err,results} = await res.data;
      console.log(res)
      if(results){
        context.commit('setMessage', results);
      } else context.commit('setMessage', err);
    },
  }
})
