const express = require('express');
const userController = require('../controllers/usersController');

const router = express.Router();
/**
 * @swagger
 * /user/user:
 *   get:
 *     summary: Retorna todos os usuários cadastrados
 *     responses:
 *       200:
 *         description: Listagem de usuários bem sucedida
 */
router.get('/user', userController.getUser);
/**
 * @swagger
 * /user/user:
 *   put:
 *     summary: Retorna a atualização dos dados de um usuário
 *     responses:
 *       200:
 *         description: Atualização de usuário bem sucedida
 */
router.put('/user', userController.updateUser);
/**
 * @swagger
 * /user/user/:id:
 *   delete:
 *     summary: Retorna a exclusão de um usuário
 *     responses:
 *       200:
 *         description: Exclusão de usuário bem sucedida
 */
router.delete('/user/:id', userController.deleteUser);
/**
 * @swagger
 * /user/user/:id:
 *   get:
 *     summary: Retorna um usuário de acordo com seu identificador numérico
 *     responses:
 *       200:
 *         description: Busca por usuário bem sucedida
 */
router.get('/user/:id', userController.getUserById);

module.exports = router;