const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product, Cart} = require('../model/index.js');

const cart = new Cart();
const user = new User();
const product = new Product();
const authenticateToken = require("../middleware/AuthenticatedUser");

// =====Cart======

// Retrieve Users Cart
route.get('/cart/:userID', (req, res) => {
    cart.fetchUserCart(req, res)
  });

// Add single item to cart
route.post('/cart/:userID/products', (req, res) => {
    cart.addUserCartProduct(req, res)
  });
//   Update single item in cart
route.put('/cart/:userID/products/:productID', (req, res) => {
    cart.updateUserCartProduct(req, res)
  });
//  Delete single item in cart
route.delete('/cart/:productID/products/:productID', (req, res) => {
    cart.deleteUserCartProduct(req, res)
  });



// ===Users====

// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Retrieve single user
route.get('/user/:userID', (req, res)=>{
    user.fetchUser(req, res);
});
// Login
route.post('/login', bodyParser.json(),(req, res)=>{
    user.login(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})

// Update
route.put('/user/:userID',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Delete
route.delete('/user/:userID', (req, res)=>{
    user.deleteUser(req, res);
});
// =====Products======
// Fetch all products
route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// Fetch a single product
route.get('/product/:productID',
(req, res)=> {
    product.fetchProduct(req, res);
})
// Add a new product
route.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// Update a product
route.put('/product/:productID', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Delete a product
route.delete('/product/:productID',
(req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = route;