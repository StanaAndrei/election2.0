'use strict';
module.exports = (sequelize, DataTypes) => {
    const Vote = sequelize.define('vote', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        pollId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'polls',
                key: 'id'
            },
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        },
        optionNr: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Vote;
};