import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from "vue3-cookies"
const {cookies} = useCookies()
const backendLink = "http://localhost:3500/"
// const backendLink = "https://mangako.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    loader: true,
    loggedInUser: null,
    category: null
  },
  mutations: {
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
    async register(context, payload){
      let res = await axios.post(`${backendLink}register`, payload);
      let {err, results} = await res.data;
      if(results){
        context.commit('setMessage', results);
      }
      else {
        context.commit('setMessage', err);
      }
    },
    async adminGetUsers({commit}, error){
      if(error) {
        console.error(error);
      } else{
        const { data } = await axios.get('/users')
        commit('setUsers', data.users);
      }
    },
    async adminCreateUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.post('/user', user)
        dispatch('user')
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
    async adminDeleteUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.delete(`/user/${user.userID}`)
        dispatch('user')
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
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', err);
      }
    }
  }
})
