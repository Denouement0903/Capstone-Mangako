
USE bfb1ggejspzwycaw5xyr;

-- DROP TABLE IF EXISTS Cartitems;
DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  userID INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  gender VARCHAR(10),
  cellphoneNumber VARCHAR(12),
  emailAdd VARCHAR(45) NOT NULL UNIQUE,
  userPass TEXT NOT NULL,
  userProfile TEXT
);

-- DROP TABLE IF EXISTS Products;
CREATE TABLE Products (
  productID INT PRIMARY KEY AUTO_INCREMENT,
  prodName VARCHAR(50),
  prodDescription TEXT,
  category VARCHAR(25),
  price DECIMAL(10,2),
  prodQuantity INT,
  imgURL TEXT,
  userID INT,
  CONSTRAINT FOREIGN KEY (userID) REFERENCES Users(userID)
);

DROP TABLE IF EXISTS Cart;
CREATE TABLE Cart (
  userID INT NOT NULL, 
  productID INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (userID) REFERENCES Users(userID),
  FOREIGN KEY (productID) REFERENCES Products(productID)
);

SELECT * FROM Users;
SELECT * FROM Products;

SELECT u.userID, p.productID
FROM Users u
INNER JOIN Products p
ON u.userID = p.userID;



DESC Users;
DESC Products;
DESC Cart;