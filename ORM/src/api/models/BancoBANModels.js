const { Model, DataTypes } = require('sequelize');

class BancoBan extends Model {
    static init(sequelize) {
        super.init({
            ban_descricao: DataTypes.STRING,
            ban_apelido: DataTypes.STRING,
            ban_numero: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'banco_ban',
        }
        
        );
        return this;
    }
}

module.exports = BancoBan;