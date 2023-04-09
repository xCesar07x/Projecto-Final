const { error } = require('console');
const ProductServices = require('../services/product.services');

const getProducts = async (req, res, next) => {
    try {
        const allproduct = await ProductServices.getAll();
        res.json(allproduct); 
    } catch (error) {
        next(error);
    }
}

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.create(newProduct);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await ProductServices.update(id, { description })
        res.status(400).json(error);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,

}