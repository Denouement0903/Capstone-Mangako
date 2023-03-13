const express = require('express');
const app = express();
const route = require('./controllers/index');
const cors = require('cors');
const {errorHandling} = require('./middleware/ErrorHandling');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 2021;

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/view/index.html')
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(route);
app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
