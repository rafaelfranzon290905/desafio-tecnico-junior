require('dotenv').config(); //Chama para poder ler as variáveis no arquivo .env

module.exports = {
  development: { //Aqui em development mudamos as informações normais pelas do .env, e o dialeto vai de mysql para o postgres
    username: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT || 'postgres' //Só uma precaução colocar o or pra postgres
  },
  "test": { //Aqui em test e production não muda nada
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
