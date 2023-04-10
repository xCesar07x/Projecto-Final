const ProductInCartServices = require("../services/productInCart.services");

const getProductInCart = async (req, res,next) => {
    try {
        const allproduct = await ProductInCartServices.getAll();
        res.json(allproduct); 
    } catch (error) {
        next(error);
    }
}

const addProductInCart = async (req, res, next) => {
    try {
        const newProductInCart = req.body;
        const result = await ProductInCartServices.create(newProductInCart);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProductInCart,
    getProductInCart,
}