const Sequelize = require('sequelize');

module.exports = class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // user_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   required: true,
      // },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      review: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Review',
      tableName: 'reviews',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Review.belongsTo(db.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    })

    db.Review.belongsTo(db.Product, {
      foreignKey: 'productId',
      targetKey: 'id',
      onDelete: 'CASCADE',
    })
  }
};