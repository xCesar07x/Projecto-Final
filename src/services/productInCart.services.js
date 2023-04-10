const ProductInCart = require("../models/productInCart.models");

class ProductInCartServices {
     
    static async getAll() {
        try {
            const products = await ProductInCart.findAll();
            return products;
        } catch (error) {
            throw error
        }
    }

    static async create(newProductInCart) {
        try {
            const AddedProduct = await ProductInCart.create(newProductInCart);
            return AddedProduct;
        } catch (error) {
            throw error;
        }
    }
}



module.exports = ProductInCartServices;