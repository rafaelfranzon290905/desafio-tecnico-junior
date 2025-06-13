'use strict';


//essa parte aqui vai é a migração que cria o banco de dados lá no postgres
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Mensagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      conteudo: { //conteudo da mensagem
        type: Sequelize.TEXT,
        allowNull: false //não permite mensagens vazias
      },
      dono: { //mostra o dono da mensagem
        type: Sequelize.STRING,
        allowNull: false 
      },
      data: { //mostra a data da mensagem
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') //Current timestamp faz com que use o horario atual do computador
      }
    });
  },

  async down (queryInterface, Sequelize) {
    //reverte a migration caso seja necessário
    await queryInterface.dropTable("Mensagens")
  }
};
