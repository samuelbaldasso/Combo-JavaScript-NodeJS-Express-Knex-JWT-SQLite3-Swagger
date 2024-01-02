const express = require("express");
const router = express.Router();

const api = require("../controllers/categoryController");
const authorize = require("../middlewares/authorize");
const authenticateToken = require("../middlewares/authenticationToken");

/**
 * @swagger
 * /categories/categories:
 *   get:
 *     summary: Retorna uma lista de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Listagem de categorias bem sucedida
 */
router.get("/categories", authenticateToken, api.getCategories);
/**
 * @swagger
 * /categories/categories:
 *   get:
 *     summary: Retorna uma lista de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Listagem de categorias bem sucedida
 */
router.get("/categories/:id", authenticateToken, api.getCategoriesById);
/**
 * @swagger
 * /categories/categories:
 *   post:
 *     summary: Retorna a adição de categorias dos pratos.
 *     responses:
 *       200:
 *         description: Adição de categoria bem sucedida
 */
router.post("/categories", authenticateToken, api.addCategory);
/**
 * @swagger
 * /categories/categories/:id:
 *   put:
 *     summary: Retorna a alteração de uma categoria de pratos.
 *     responses:
 *       200:
 *         description: Alteração de categoria bem sucedida
 */
router.put("/categories/:id", authenticateToken, api.updateCategory);
/**
 * @swagger
 * /categories/categories/:id:
 *   delete:
 *     summary: Retorna a categoria dos pratos de acordo com um identificador numérico.
 *     responses:
 *       200:
 *         description: Busca de categoria bem sucedida
 */
router.delete("/categories/:id", authenticateToken, api.deleteCategory);

module.exports = router;
