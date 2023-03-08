const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product} = require('../model/index.js');

// const cart = new Cart();
const user = new User();
const product = new Product();
const authenticateToken = require("../middleware/AuthenticatedUser");

// =====Cart======

// route.get('/users/:userId/cart',
// cart.fetchUserCartItems(req, res));

// ===Users====

// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Login
route.post('/login', (req, res)=>{
    user.login(req, res);
});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete
route.delete('/user/:id', (req, res)=>{
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