const express = require('express');
const dishesController = require('../controllers/dishesController');
const authorize = require("../middlewares/authorize");

const router = express.Router();

router.get('/dishes', dishesController.dishes);
router.post('/dishes', authorize('admin'), dishesController.postDishes);

module.exports = router;