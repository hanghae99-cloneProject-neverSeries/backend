const Sequelize = require("sequelize");

module.exports = class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      review: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  }
  static associate(db) {
    db.Review.belongsTo(db.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    })

    db.Review.belongsTo(db.Product, {
      foreignKey: "productId",
      targetKey: "id",
      onDelete: "CASCADE",
    });
  }
};
