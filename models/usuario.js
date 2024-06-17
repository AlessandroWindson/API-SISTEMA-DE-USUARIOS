'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {
  static associate(models) {
    // define association here
  }
}

Usuario.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Usuario',
});

module.exports = Usuario;
