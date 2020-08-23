// lib/db.js

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "vue-login",
  password: "gloria",
});

connection.connect();
module.exports = connection;
