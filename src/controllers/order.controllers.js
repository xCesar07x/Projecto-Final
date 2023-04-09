const OrderServices = require('../services/order.services');


const getOrders = async (req, res, next) => {
    try {
        const allproduct = await OrderServices.getAll();
        res.json(allproduct); 
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getOrders,
}