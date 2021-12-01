const { Model, DataTypes } = require('sequelize');

class CartaoCrt extends Model {
    static init(sequelize) {
        super.init({
            crt_titular: DataTypes.STRING,
            crt_descricao: DataTypes.STRING,
            crt_validade: DataTypes.STRING,
            crt_limite: DataTypes.DOUBLE,
            crt_melhordia: DataTypes.INTEGER,
            ban_codigo: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'cartao_crt',
        }
        
        );
        return this;
    }
}

module.exports = CartaoCrt;