const Sequelize = require("sequelize");

module.exports = class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // useId: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   required: true,
        // },
        review: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Review",
        tableName: "reviews",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Review.belongsTo(db.User, {
      foreignKey: "userId",
      targetKey: "id",
    });

    db.Review.belongsTo(db.Product, {
      foreignKey: "productId",
      targetKey: "id",
      onDelete: "CASCADE",
    });
  }
};
