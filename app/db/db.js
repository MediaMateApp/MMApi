require("dotenv").config();
const mysql2 = require("mysql2");

const conn = mysql2.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  ssl: {
    rejectUnauthorized: false,
  },
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to PlanetScale");
});

module.exports = conn;
