const express = require('express');
const orderController = require('../controllers/ordersController');
const authenticateToken = require("../middlewares/authenticationToken");

const router = express.Router();

router.post('/orders', authenticateToken, orderController.orders);

module.exports = router;