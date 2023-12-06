const express = require('express');
const favoritesController = require('../controllers/favoritesController');
const authenticateToken = require("../middlewares/authenticationToken");

const router = express.Router();
/**
 * @swagger
 * /favorite/favorites:
 *   post:
 *     summary: Retorna a adição de um prato como favorito no sistema. As API´s deste conjunto só poderão ser utilizadas por um usuário logado
 *     responses:
 *       200:
 *         description: Adição aos favoritos de prato bem sucedida
 */
router.post('/favorites', authenticateToken, favoritesController.postFavorites);
/**
 * @swagger
 * /favorite/favorites:
 *   get:
 *     summary: Retorna uma lista de pratos favoritos pelo usuário.
 *     responses:
 *       200:
 *         description: Listagem de pratos favoritos bem sucedida
 */
router.get('/favorites', authenticateToken, favoritesController.getFavorites);
/**
 * @swagger
 * /favorite/favorites/:id:
 *   delete:
 *     summary: Retorna a exclusão de um prato da lista de favoritos pelo usuário.
 *     responses:
 *       200:
 *         description: Exclusão de prato da lista de favoritos bem sucedida
 */
router.delete('/favorites/:id', authenticateToken, favoritesController.getFavoritesById);

module.exports = router;