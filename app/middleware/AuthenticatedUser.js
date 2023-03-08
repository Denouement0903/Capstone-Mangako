const {sign, verify} = require('jsonwebtoken');
const dotEnv = require('dotenv').config();
// Creation of Token
function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1hr'
    });
}
//
function verifyAToken(req, res, next) {
    try{
        const token = req.cookies["LegitUser"] !== null ? req.cookies["LegitUser"] : 
        "Please register" ;
        const isValid = null;
        if(token !== "Please register") {
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "Please register"})
            }
        }else {
            res.status(400).json({err: "Please register"})
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}



function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "Forbidden" });
      }
      req.user = user;
      next();
    });
  }



module.exports= {createToken, verifyAToken, authenticateToken};