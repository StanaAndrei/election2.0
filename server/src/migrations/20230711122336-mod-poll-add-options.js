'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Polls', 'options', {
        type: Sequelize.JSON,
        allowNull: false
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Polls', 'options')
  }
};
