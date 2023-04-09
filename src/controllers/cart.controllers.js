const CartServices = require('../services/cart.services');

// const getCart = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const allCart = await CartServices.getAll(id)
//         res.json(allCart)
//     } catch (error) {
//         res.status(400).json(error);
//     }
// }

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
    // getCart,
}