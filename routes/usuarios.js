const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

// Remova '/usuarios' de cada rota, pois isso já é tratado ao montar o roteador

router.post('/', UsuarioController.criarUsuario);
router.get('/', UsuarioController.listarUsuarios);
router.get('/:id', UsuarioController.obterUsuarioPorId);
router.put('/:id', UsuarioController.atualizarUsuario);
router.delete('/:id', UsuarioController.deletarUsuario);

module.exports = router;
