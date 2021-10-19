const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          required: true,
        },
        pw: {
          type: Sequelize.STRING,
          allowNull: false,
          required: true,
        },
        nickname: {
          type: Sequelize.STRING,
          allowNull: false,
          required: true,
          unique: true,
        },
        muffin: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        productId: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // User 와 Review 관계 --> 1:N
    db.User.hasMany(db.Review, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    // User 와 Like --> 1:N
    db.User.hasMany(db.Like, {
      foreignKey: "userId",
      sourceKey: "id",
    });

    // User 와 Product --> 1:N
    db.User.hasMany(db.Product, {
      foreignKey: "userId",
      sourceKey: "id",
    });

    // User 와 Round --> 1:N
    db.User.hasMany(db.Round, {
      foreignKey: "userId",
      sourceKey: "id",
    });
  }
};
