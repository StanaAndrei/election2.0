'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('votes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            pollId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'polls',
                    key: 'id'
                },
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                allowNull: false
            },
            optionNr: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        });
        await queryInterface.addConstraint('votes', {
            fields: ['userId', 'pollId'],
            type: 'unique',
            name: 'composite_unique_key',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('votes');
    }
};
