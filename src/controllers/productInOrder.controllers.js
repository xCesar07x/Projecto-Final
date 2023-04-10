const ProductInOrderServices = require("../services/productInOrder.services");

const getProductInOrder = async (req, res,next) => {
    try {
        const allproduct = await ProductInOrderServices.getAll();
        res.json(allproduct); 
    } catch (error) {
        next(error);
    }
}

const addProductInOrder = async (req, res, next) => {
    try {
        const newProductInOrder = req.body;
        const result = await ProductInOrderServices.create(newProductInOrder);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProductInOrder,
    getProductInOrder,
}