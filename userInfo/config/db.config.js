const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  database: "user-data",
  user: "root",
  password: "root",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

module.exports = connection;
