const express = require('express');
const dishesController = require('../controllers/dishesController');
const authorize = require("../middlewares/authorize");

const router = express.Router();
/**
 * @swagger
 * /dishes/dishes:
 *   get:
 *     summary: Retorna uma lista de todos os pratos registrados
 *     responses:
 *       200:
 *         description: Listagem de pratos bem sucedida
 */
router.get('/dishes', dishesController.dishes);
/**
 * @swagger
 * /dishes/dishes:
 *   post:
 *     summary: Retorna o cadastro de um prato. A operação só poderá ser efetuada se o usuário for um administrador do sistema
 *     responses:
 *       200:
 *         description: Cadastro de prato bem sucedido
 */
router.post('/dishes', authorize('admin'), dishesController.postDishes);

module.exports = router;