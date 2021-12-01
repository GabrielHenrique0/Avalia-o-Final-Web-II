const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const conexao = new Sequelize(dbConfig);
const bancoban = require('../api/models/BancoBANModels.js');
const cartaocrt = require('../api/models/CartaoCRTModels.js');

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

bancoban.init(conexao);
cartaocrt.init(conexao);

module.exports = conexao;