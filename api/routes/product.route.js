//API Route
const express = require('express');
// save try catch
const expressAsyncHandler = require('express-async-handler');

const router = express.Router();

const productController = require('../controller/product.controller')
const { isAuth, isAdmin } = require('../../utils');

router.get('/seed', productController.seedProducts)
router.get('/categories', expressAsyncHandler(productController.getCategories))


router.get('/:id', expressAsyncHandler(productController.getDetail))

router.get('/', productController.index)

router.post('/:id/reviews', isAuth, expressAsyncHandler(productController.postReview))


module.exports = router;