const Sequelize = require("sequelize");

module.exports = class Round extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        round: {
          type: Sequelize.STRING,
          allowNull: false,
          required: true,
        },
        roundState: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Round",
        tableName: "rounds",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Round.belongsTo(db.Product, {
      foreignKey: "productId",
      targetKey: "id",
    });
  }
};
