import { createStore } from 'vuex'
import axios from 'axios'

const backendLink = "https://mangako.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    loader: true,
    loggedInUser: null
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
      state.products = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
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
    }
  },
  actions: {
    async login(context, payload){
      const res = await axios.post(`${backendLink}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      }
      else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload){
      let res = await axios.post(`${backendLink}register`, payload);
      let {msg, err} = await res.data;
      if(msg){
        context.commit('setMessage', msg);
      }
      else {
        context.commit('setMessage', err);
      }
    },
    async adminGet({commit}, error){
      if(error) {
        console.error(error);
      } else{
        const { data } = await axios.get('/admin')
        commit('setItems', data.items);
      }
    },
    async adminCreateUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.post('/admin', user) //replace '/admin' with your API endpoint for creating an item
        dispatch('admin')
      }
    }, 
    async adminUpdateUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.post(`/admin/${user.id}`, user) //replace '/admin' with your API endpoint for creating an item
        dispatch('admin')
      }
    }, 
    async adminDeleteUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.delete(`/admin/${user.id}`) //replace '/admin' with your API endpoint for deleting an item
        dispatch('admin')
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
    }
  }
})
