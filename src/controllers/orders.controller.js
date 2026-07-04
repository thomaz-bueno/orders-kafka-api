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

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/thomaz-bueno/orders-kafka-api.git
git push -u origin main