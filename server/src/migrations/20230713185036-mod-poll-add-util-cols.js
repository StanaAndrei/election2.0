'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('polls', 'isPublic', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    await queryInterface.addColumn('polls', 'desc', {
        type: Sequelize.STRING,        
    })
    await queryInterface.addColumn('polls', 'options', {
        type: Sequelize.JSON,
        allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('polls', 'isPublic')
    await queryInterface.removeColumn('polls', 'desc')
    await queryInterface.removeColumn('polls', 'options')

  }
};
