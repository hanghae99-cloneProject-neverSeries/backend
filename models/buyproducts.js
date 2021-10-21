const Sequelize = require("sequelize");

module.exports = class BuyProduct extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        round: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "BuyProduct",
        tableName: "buyProducts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.BuyProduct.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "id",
    });
  }
};
