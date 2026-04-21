'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, // 1 2 3 ...
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      path: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE(),
        allowNull: false,
      }
    })






  },



  async down(queryInterface) {
    await queryInterface.dropTable('products')
  }
};
