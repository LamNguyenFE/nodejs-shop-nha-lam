const express = require('express');
const expressAsyncHandler = require('express-async-handler');

const router = express.Router();

const cartController = require('../controller/cart.controller')

// router.get('/', cartController.index)

router.get('/add/:productId', cartController.addToCart)


module.exports = router;