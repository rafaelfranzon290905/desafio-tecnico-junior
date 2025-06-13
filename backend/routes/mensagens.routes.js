const express = require('express'); //Chama o express e depois cria um router usando ele. Daí ele importa Mensagens da pasta models
const router = express.Router();
const {Mensagens} = require('../models');

//Rota para enviar mensagens
router.post('/', async (req, res) => { //Faz o router que usa o método post para enviar os dados de uma mensagem do usuário para tentar criar ela
    const {conteudo, dono} = req.body;
    try {
        const mensagem = await Mensagens.create({conteudo, dono});
        res.status(201).json({
            mensagem: 'Mensagem recebida com sucesso!',
            data: mensagem,
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar a mensagem'});
    }
});

//Rota para buscar as mensagens
router.get('/', async (req, res) => {  //Usa o método get para pegar as mensagens já criadas 
    try {
        const mensagens = await Mensagens.findAll();
        res.json(mensagens);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar mensagens'});
    }
});

module.exports = router;
