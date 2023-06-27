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
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('NORMAL', 'ADMIN'),
        allowNull: false,
        defaultValue: 'NORMAL'
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set() {
            throw new Error('\'fullName\' is VIRTUAL!')
        }
    }
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
    user.createdAt = null;
  })

  return User;
};

