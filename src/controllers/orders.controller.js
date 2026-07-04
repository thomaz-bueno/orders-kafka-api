const ordersService = require('../services/orders.service')

const createOrder = (req, res) => {
    try {
        const result = ordersService.createOrder(req.body);
        return res.status(201).json(result);
    } catch(err) {
        return res.status(400).json({erro: err});
    }
}

module.exports = {
    createOrder
};