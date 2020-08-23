// lib/db.js

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "vuelogin",
  password: "gloria",
});

connection.connect();
module.exports = connection;
