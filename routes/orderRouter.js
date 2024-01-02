const express = require("express");
const orderController = require("../controllers/ordersController");
const authenticateToken = require("../middlewares/authenticationToken");

const router = express.Router();

/**
 * @swagger
 * /order/orders:
 *   post:
 *     summary: Retorna a adição do pedido de um prato no sistema. As API´s deste conjunto só poderão ser utilizadas por um usuário logado
 *     responses:
 *       200:
 *         description: Adição de um pedido bem sucedida
 */
router.post("/orders", authenticateToken, orderController.orders);
/**
 * @swagger
 * /order/orders:
 *   get:
 *     summary: Retorna a adição do pedido de um prato no sistema. As API´s deste conjunto só poderão ser utilizadas por um usuário logado
 *     responses:
 *       200:
 *         description: Adição de um pedido bem sucedida
 */
router.get("/orders", authenticateToken, orderController.getOrders);

module.exports = router;
