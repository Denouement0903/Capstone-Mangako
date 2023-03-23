const express = require('express');
const app = express();
const route = require('./controllers/index');
const cors = require('cors');
const {createToken, verifyAToken, authenticateToken} = require('./middleware/AuthenticatedUser')
const {errorHandling} = require('./middleware/ErrorHandling');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 2021;

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/view/index.html')
  });

  let corsOptions =  {
    origin: 'http://localhost:8080'
}


app.use( 
    (req, res, next)=> {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
    });

app.use(
    cookieParser(),
    cors(),
    route,
    express.json(),
    express.urlencoded({extended: true})
)
app.use(createToken, verifyAToken, authenticateToken)
app.use(errorHandling);


app.listen(
    PORT,
    () => {
        console.log(`API is running on http://localhost:${PORT}`);
    }
)
