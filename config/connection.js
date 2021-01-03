// Set up MySQL connection.
var mysql = require("mysql");
var connection;
require("dotenv").config();
console.log("---", process.env.DB_pass);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Milk40!!",
    database: "burgers_db",
  });
}

// Make connection.
connection.connect();

module.exports = connection;
