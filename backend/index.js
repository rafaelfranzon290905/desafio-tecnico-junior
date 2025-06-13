const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
//Chama o express e o cors
const db = require('./models');

//signaliza para usar o cors e o json do express
app.use(cors());
app.use(express.json());

//Aqui eu vou fazer as rotas
const mensagensRoutes = require('./routes/mensagens.routes');
app.use('/mensagens', mensagensRoutes);

//Teste de conexão e start do servidor
const PORT = process.env.PORT;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});