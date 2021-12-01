const BancoBan = require('../models/BancoBANModels.js');

module.exports = {

    async index(req, res) {
        const bancoban = await BancoBan.findAll();
        return res.json(bancoban);
    },

    async store(req, res) {
        const { ban_descricao, ban_apelido, ban_numero } = req.body;
        const bancoban = await BancoBan.create({ ban_descricao, ban_apelido, ban_numero });
        return res.status(200).send({
            status: 1,
            message: "Banco cadastrado com sucesso!!!",
            bancoban
        })
    },

    async update(req, res) {
        const { ban_descricao, ban_apelido, ban_numero } = req.body;
        const { codigo } = req.params;

        await BancoBan.update({
            ban_descricao, ban_apelido, ban_numero
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Banco cadastrado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await BancoBan.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Banco excluído com sucesso!!!",
        })
    }
}