const express = require('express');
const expressAsyncHandler = require('express-async-handler');

const orderRouter = express.Router();
const Order = require('../../models/orderModel');

const orderController = require('../controller/order.controller')
const { isAuth, isAdmin } = require('../../utils');

// router.get('/', cartController.index)

orderRouter.post('/', isAuth, expressAsyncHandler(orderController.postCreate))


orderRouter.get('/mine', isAuth, expressAsyncHandler(orderController.getMine));

orderRouter.get('/', isAuth, expressAsyncHandler(orderController.getOrderByUsername));

orderRouter.get('/:id', isAuth, expressAsyncHandler(orderController.getOrderDetailById));

orderRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(orderController.deleteOrderById));

orderRouter.put('/:id/deliver', isAuth, isAdmin, expressAsyncHandler(orderController.deliverOrder));





module.exports = orderRouter;