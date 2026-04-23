'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',  // se atualizar categoria atualizar o restante
      onDelete: 'SET NULL', // se deletar categoria setar como null
    });
  },


  async down(queryInterface) {
    await queryInterface.removeColumn('products', 'category_id');
  }
};
