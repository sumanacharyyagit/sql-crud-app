const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("Sequelize");
const Sequelize = new Sequelize(deConfig.DB, deConfig.USER, deConfig.PASSWORD, {
  host: deConfig.HOST,
  dialect: deConfig.dialect,
  operatorsAliasses: false,

  pool: {
    max: dbConfig.pool.max,
    max: dbConfig.pool.min,
    max: dbConfig.pool.acquire,
    max: dbConfig.pool.idle,
  },
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const db = {};  

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.products = require('./productModel.js')(sequelize, DataTypes);
db.reviews = require('./reviewModel.js')(sequelize, DataTypes);

