const Order = require("../models/order.models");



class OrderServices {

    static async getAll() {
        try {
            const products = await Order.findAll();
            return products;
        } catch (error) {
            throw error
        }
    }
}

module.exports = OrderServices;