const Cart = require("../models/cart.models");

class CartServices {

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