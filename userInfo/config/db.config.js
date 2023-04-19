// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12345678",
  DB: "sequelize_user_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "12345678",
//   DB: "testdb",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
