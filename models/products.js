const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      bookInfo: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },

      like: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Product',
      tableName: 'products',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    // Product 와 Like --> 1:N
    db.Product.hasMany(db.Like, {
      foreignKey: 'productId',
      sourceKey: 'id',
    })

    // Product 와 Round --> 1:N
    db.Product.hasMany(db.Round, {
      foreignKey: 'productId',
      sourceKey: 'id',
    })

    db.Product.hasMany(db.Review, {
      foreignKey: 'productId',
      sourceKey: 'id'
    })

    db.Product.belongsTo(db.User, {
      foreignKey: 'productId',
      sourceKey: 'id',
    })
  }
};