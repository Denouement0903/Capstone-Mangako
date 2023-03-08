require('dotenv').config();
const {createPool} = require('mysql');

const connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    multipleStatements: true
});

module.exports = connection;
