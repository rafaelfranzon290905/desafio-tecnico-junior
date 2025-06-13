'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagens extends Model {
   
    static associate(models) {

    }
  }
  Mensagens.init({ //Aqui tive que mudar para que os conteúdos batessem com os da tabela
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Mensagens',
    tableName: 'Mensagens', //Para não dar erro de usar uma tabela errada, quero garantir que vá para a tabela certa
    timestamps: false //desativo campos createdAt e updatedAt
  });
  return Mensagens;
};