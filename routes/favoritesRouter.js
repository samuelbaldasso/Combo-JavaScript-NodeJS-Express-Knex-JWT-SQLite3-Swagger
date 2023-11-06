const express = require('express');
const favoritesController = require('../controllers/favoritesController');
const authenticateToken = require("../middlewares/authenticationToken");

const router = express.Router();

router.post('/favorites', authenticateToken, favoritesController.postFavorites);
router.get('/favorites', authenticateToken, favoritesController.getFavorites);
router.delete('/favorites/:id', authenticateToken, favoritesController.getFavoritesById);

module.exports = router;