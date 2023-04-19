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


// const Sequelize = new Sequelize(dbCofig.DB, dbConfig.USER,
// dbConfig.PASSWORD, {
// 	host: dbConfig.HOST,
// 	dialect: dbConfig.dialect,
// 	operationsAliases: false,
// 	pool: {
// 	max: dbConfig.pool.max,
// 	min: dbConfig.pool.min,
// 	acquire: dbConfig.pool.acquire,
// 	idle: dbConfig.pool.idle
// 	}
// };
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js") (sequelize, Sequelize);

// module.exports = db;
// const app = express();
// app.use(....);

// const db = require(“./app/models”);
// db.sequelize.sync();
