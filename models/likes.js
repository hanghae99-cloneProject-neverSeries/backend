const Sequelize = require('sequelize');

module.exports = class Like extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // user_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      // productId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Like',
      tableName: 'likes',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Like.belongsTo(db.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    })

    db.Like.belongsTo(db.Product, {
      foreignKey: 'productId',
      targetKey: 'id',
      onDelete: 'CASCADE',
    })
  }
};