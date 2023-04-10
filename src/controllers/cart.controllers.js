const CartServices = require('../services/cart.services');

const addCart = async (req, res, next) => {
    try {
        const addCart = req.body;
        const result = await CartServices.addCart(addCart);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addCart,
}