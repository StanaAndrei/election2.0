'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const { GLOBAL_SALT } = require('../settings/salt.setup');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
        type: DataTypes.STRING
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
        attributes: {
          exclude: ['password']
        }
      },
      scopes: {
        withPassword: {
          attributes: {
            include: ['password']
          }
        }
      }
  });
  
  User.beforeCreate((user, options) => {
    const hashedPassword = bcrypt.hashSync(user.password, GLOBAL_SALT);
    user.password = hashedPassword;
  })

  return User;
};

