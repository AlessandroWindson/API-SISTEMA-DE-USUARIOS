const Usuario = require('../models/usuario');

// Função para criar um novo usuário
const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    // Cria o usuário no banco de dados
    const usuario = await Usuario.create({ nome, email, senha });
    res.status(201).json(usuario); // Retorna o usuário criado com status 201 (Created)
  } catch (error) {
    // Tratamento de erros específicos de validação do Sequelize
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: error.errors.map(err => err.message) });
    } else {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao criar usuário' });
    }
  }
};

// Função para listar todos os usuários
const listarUsuarios = async (req, res) => {
  try {
    // Busca todos os usuários no banco de dados
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios); // Retorna a lista de usuários com status 200 (OK)
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro interno ao buscar usuários' });
  }
};

// Função para obter um usuário por ID
const obterUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    // Busca o usuário pelo ID no banco de dados
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario); // Retorna o usuário encontrado com status 200 (OK)
  } catch (error) {
    console.error(`Erro ao obter usuário por ID ${id}:`, error);
    res.status(500).json({ error: 'Erro interno ao buscar usuário' });
  }
};

// Função para atualizar um usuário
const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    let usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    // Atualiza os dados do usuário com base no que foi enviado no corpo da requisição
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    await usuario.save(); // Salva as alterações no banco de dados
    res.status(200).json(usuario); // Retorna o usuário atualizado com status 200 (OK)
  } catch (error) {
    console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
    res.status(500).json({ error: 'Erro interno ao atualizar usuário' });
  }
};

// Função para deletar um usuário
const deletarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    await usuario.destroy(); // Remove o usuário do banco de dados
    res.status(204).end(); // Retorna um status 204 (No Content) indicando sucesso na remoção
  } catch (error) {
    console.error(`Erro ao deletar usuário com ID ${id}:`, error);
    res.status(500).json({ error: 'Erro interno ao deletar usuário' });
  }
};

// Exporta todas as funções necessárias para serem utilizadas nas rotas
module.exports = {
  criarUsuario,
  listarUsuarios,
  obterUsuarioPorId,
  atualizarUsuario,
  deletarUsuario
};
