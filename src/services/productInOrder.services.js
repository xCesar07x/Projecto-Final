const ProductInOrder = require("../models/productInOrder.models");

class ProductInOrderServices {
    static async getAll() {
        try {
            const products = await ProductInOrder.findAll();
            return products;
        } catch (error) {
            throw error
        }
    }

    static async create(newProductInOrder) {
        try {
            const AddedProduct = await ProductInOrder.create(newProductInOrder);
            return AddedProduct;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInOrderServices;