'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('polls', 'options', {
        type: Sequelize.JSON,
        allowNull: false
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('polls', 'options')
  }
};
