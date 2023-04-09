const Product = require("../models/product.model");
const Users = require("../models/user.models");


class ProductServices {

    static async getAll() {
        try {
            const products = await Product.findAll({
                include: [
                    {
                        model: Users,
                        attributes: ['username']
                    }
                ]
            });
            return products;
        } catch (error) {
            throw error
        }
    }

    static async create(newProduct) {
        try {
            const ProductCreated = await Product.create(newProduct);
            return ProductCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, { description }) {
        try {
            const result = await Product.update( { description }, {
                where: { id }
            } )
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;