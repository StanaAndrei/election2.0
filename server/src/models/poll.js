'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Poll = sequelize.define('poll', {
        name: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }//*/
        },
        options: {
            type: DataTypes.JSON,
            allowNull: false
        }
    })

    Poll.associate = db => {
        Poll.belongsTo(db.UserModel, {
            foreignKey: 'userId',
            as: 'UserModel'
        })
        Poll.hasMany(db.VoteModel, {
            as: 'vote'
        })
    };

    return Poll;
};