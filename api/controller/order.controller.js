const Order = require('../../models/orderModel');

module.exports.postCreate = async (req, res) => {
    console.log('aaa');

    if (!req.body.orderItems.length) {
        res.status(400).send({ message: 'Cart is empty' });
    }

    console.log(req.body)

    const newOrder = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res
        .status(201)
        .send({ message: 'New Order Created', data: newOrderCreated });
}

module.exports.getMine = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
}

module.exports.getOrderByUsername = async (req, res) => {
    const orders = await Order.find({}).populate('user', 'name');
    res.send(orders);
}

module.exports.getOrderDetailById = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order)
        res.send(order);
    else
        res.status(404).send({ message: 'order Not Found' })
}

module.exports.deleteOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
}

module.exports.deliverOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);
    console.log(order);
    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();
        res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
}