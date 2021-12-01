'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('CARTAO_CRT', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      crt_titular: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },

      crt_descricao: {
        allowNull: true,
        type: Sequelize.STRING(15),
      },

      crt_validade: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },

      crt_limite: {
        allowNull: true,
        type: Sequelize.DOUBLE(12,2),
      },

      crt_melhordia: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      crt_melhordia: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      ban_codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BANCO_BAN',
          key: 'id'
        },
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
    await queryInterface.dropTable('cartao_crt');
  }
};