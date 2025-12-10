'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn('products','offer')
  },

  async down (queryInterface, Sequelize) {
    
  }
};
