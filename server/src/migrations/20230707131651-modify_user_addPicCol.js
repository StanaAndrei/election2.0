'use strict';

const { DataTypes } = require('sequelize');
const { DEFAULT_IMG } = require('../../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'pic', {
        type: DataTypes.TEXT('long')
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'pic');
  }
};
