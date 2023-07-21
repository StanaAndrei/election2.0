'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const { GLOBAL_SALT } = require('../settings/salt.setup');
const { DEFAULT_IMG } = require('../../constants');
const { UserModel } = require('.');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
    pic: {
        type: DataTypes.TEXT('long'),
        get() {
            const rawVal = this.getDataValue('pic');
            return rawVal ? `data:image/jpeg;base64,${rawVal}` : DEFAULT_IMG;
        }
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
  })

  User.associate = db => {
    User.hasMany(db.PollModel, {
        as: 'polls',
        foreignKey: 'userId'
    })
    User.hasMany(db.VoteModel, {
        as: 'vote'
    })
  }

  User.beforeCreate((user, options) => {
    const hashedPassword = bcrypt.hashSync(user.password, GLOBAL_SALT);
    user.password = hashedPassword;
    user.createdAt = null;
  })//*/

  return User;
};

