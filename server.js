const express = require('express');
const app = express();
const sequelize = require('./config/database');
const usuariosRouter = require('./routes/usuarios'); // Importar as rotas de usuários
require('dotenv').config();

app.use(express.json());
app.use('/api/usuarios', usuariosRouter); // Usar o roteador de usuários para o caminho '/api/usuarios'

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });
