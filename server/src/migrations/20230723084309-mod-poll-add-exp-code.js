'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('polls', 'code', {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    })
    await queryInterface.addColumn('polls', 'expdate', {
        type: Sequelize.DATE,
        allowNull: false
    })//*/
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('polls', 'code')
    await queryInterface.removeColumn('polls', 'expdate')//*/
  }
};
