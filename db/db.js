require('dotenv').config()
const mysql2 = require('mysql2')

const dbPool = mysql2.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS
});

module.exports = dbPool