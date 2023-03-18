// Database configuration
const database = require('../config/database');
// bcrypt module
const {hash, compare, hashSync } = require('bcrypt');
// Middleware for creating a token
const {createToken} = require('../middleware/AuthenticatedUser');


// Cart
class Cart {
    fetchUserCart(req, res){
        const userID = req.params.userID;
        const query = `
          SELECT c.userID, c.productID, p.prodName, p.price, c.quantity
          FROM Cart c
          INNER JOIN Products p ON c.productID = p.productID
          WHERE c.userID = ?
        `;
        database.query(query, [userID], (error, results) => {
          if (error) throw error;
          res.json(results);
        });
    };
    addUserCartProduct(req, res){
        const userID = req.params.userID;
        const { productID, quantity } = req.body;
        const query = `
          INSERT INTO Cart (userID, productID, quantity)
          VALUES (?, ?, ?)
        `;
        database.query(query, [userID, productID, quantity], (error, results) => {
          if (error) throw error;
          res.send('Product added to cart');
        });
    };
    updateUserCartProduct(req, res){
        const userID = req.params.userID;
        const productID = req.params.productID;
        const { quantity } = req.body;
        const query = `
          UPDATE Cart
          SET quantity = ?
          WHERE userID = ? AND productID = ?
        `;
        database.query(query, [quantity, userID, productID], (error, results) => {
          if (error) throw error;
          res.send('Cart item updated');
        });
    };
    deleteUserCartProduct(req, res){
        const userID = req.params.userID;
        const productID = req.params.productID;
        const query = `
          DELETE FROM Cart
          WHERE userID = ? AND productID = ?
        `;
        database.query(query, [userID, productID], (error, results) => {
          if (error) throw error;
          res.send('Cart item removed');
        });
    }
}



// User
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry = 
        `
        SELECT firstName, lastName, gender, emailAdd, userPass, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        database.query(strQry, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You provided the wrong email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;
                        // Create a token
                        const jwToken = 
                        createToken(
                            {
                                emailAdd, userPass  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true,
                            path: '/'
                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You entered an invalid password or you are not registered. '
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userProfile
        FROM Users;
        `;
        //database
        database.query(strQry, (err, data)=>{
            if(err) console.log(err);
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userProfile
        FROM Users
        WHERE userID = ?;
        `;
        //db
        database.query(strQry,[req.params.userID], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        // Payload
        let details = req.body;
        // Hashing user password
        details.userPass = await 
        hash(details.userPass, 15);
        // This information will be used for authentication.
        let user = {
            emailAdd: details.emailAdd,
            userPass: details.userPass
        }
        // sql query
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        database.query(strQry, [details], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true,
                    path: '/'
                });
                res.status(200).json({msg: "A user record was saved."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const strQry = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //database
        database.query(strQry,[data, req.params.userID], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }
    deleteUser(req, res) {
        const strQry = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //database
        database.query(strQry,[req.params.userID], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}
// Product
class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT productID, prodName, prodDescription, 
        category, price, prodQuantity, imgURL
        FROM Products;`;
        database.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT productID, prodName, prodDescription, 
        category, price, prodQuantity, imgURL
        FROM Products
        WHERE productID = ?;`;
        database.query(strQry, [req.params.productID], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO Products
        SET ?;
        `;
        database.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({msg: "Product saved"});
                }
            }
        );    

    }
    updateProduct(req, res) {
        const strQry = 
        `
        UPDATE Products
        SET ?
        WHERE productID = ?
        `;
        database.query(strQry,[req.body, req.params.productID],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({msg: "Product updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const userId = req.user.userID;
        const productId = req.params.productID;
        const strQry = `DELETE FROM Products WHERE productID = ? AND userID = ?`;
        database.query(strQry, [productId, userId], (err, result) => {
          if (err) throw err;
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found or not authorized" });
          }
          res.status(204).end();
        });
      }
      

}
// Export User class
module.exports = {
    Cart,
    User, 
    Product
}