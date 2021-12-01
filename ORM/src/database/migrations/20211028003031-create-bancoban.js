'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface. createTable('BANCO_BAN', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      ban_descricao: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },

      ban_apelido: {
        allowNull: true,
        type: Sequelize.STRING(15),
      },

      ban_numero: {
        allowNull: true,
        type: Sequelize.STRING(3),
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('banco_ban');
  }
};