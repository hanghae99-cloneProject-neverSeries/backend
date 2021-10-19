const Sequelize = require("sequelize");

const User = require("../models/users");
const Product = require("../models/products");
const Round = require("../models/rounds");
const Like = require("../models/likes");
const Review = require("../models/reviews");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;

db.User = User;
db.Product = Product;
db.Round = Round;
db.Like = Like;
db.Review = Review;

User.init(sequelize);
Product.init(sequelize);
Round.init(sequelize);
Like.init(sequelize);
Review.init(sequelize);

User.associate(db);
Product.associate(db);
Round.associate(db);
Like.associate(db);
Review.associate(db);

module.exports = db;
