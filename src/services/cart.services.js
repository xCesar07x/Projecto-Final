const Cart = require("../models/cart.models");
// const Product = require("../models/product.model");
// const Users = require("../models/user.models");


class CartServices {

    // static async getAll(id) {
    //     try {
    //         const getCart = await Cart.findByPk(id, {
    //             attributes: { exclude: ['userId'] },
    //             include: [
    //                 {
    //                     model: Users,
    //                     attributes: ['username']
    //                 },
    //             ]
    //         })
    //         return getCart;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    static async addCart(addCart) {
        try {
            const CartAdded = await Cart.create(addCart);
            return CartAdded;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;