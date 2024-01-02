const express = require("express");
const router = express.Router();

const api = require("../controllers/reviewController");
const authenticateToken = require("../middlewares/authenticationToken");

/**
 * @swagger
 * /reviews/reviews:
 *   post:
 *     summary: Retorna uma lista de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Listagem de categorias bem sucedida
 */
router.post("/reviews", authenticateToken, api.addReview);
/**
 * @swagger
 * /reviews/reviews:
 *   get:
 *     summary: Retorna uma lista de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Listagem de categorias bem sucedida
 */
router.get("/reviews", authenticateToken, api.getReviews);
/**
 * @swagger
 * /reviews/reviews:
 *   put:
 *     summary: Retorna uma lista de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Listagem de categorias bem sucedida
 */
router.put("/reviews/:id", authenticateToken, api.updateReview);
/**
 * @swagger
 * /reviews/reviews:
 *   delete:
 *     summary: Retorna uma lista de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Listagem de categorias bem sucedida
 */
router.delete("/reviews/:id", authenticateToken, api.deleteReview);

module.exports = router;
