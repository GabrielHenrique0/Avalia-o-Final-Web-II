const CartaoCrt = require('../models/CartaoCRTModels.js');

module.exports = {

    async index(req, res) {
        const cartaocrt = await CartaoCrt.findAll();
        return res.json(cartaocrt);
    },

    async store(req, res) {
        const { crt_titular, 
                crt_descricao, 
                crt_validade, 
                crt_limite, 
                crt_melhordia, 
                ban_codigo } = req.body;
        const cartaocrt = await CartaoCrt.create({ crt_titular, 
                                                   crt_descricao, 
                                                   crt_validade, 
                                                   crt_limite, 
                                                   crt_melhordia, 
                                                   ban_codigo });
        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!!!",
            cartaocrt
        })
    },

    async update(req, res) {
        const { crt_titular, crt_descricao, crt_validade, crt_limite, crt_melhordia, 
            ban_codigo } = req.body;
        const { codigo } = req.crt.params;

        await CartaoCrt.update({
            crt_codigo, crt_titular, crt_descricao, crt_validade, crt_limite, crt_melhordia, ban_codigo
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.crt.params;

        await CartaoCrt.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário excluído com sucesso!!!",
        })
    }
}