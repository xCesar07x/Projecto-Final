const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ProductInCart = db.define('productincart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id",  
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false,
})

module.exports = ProductInCart;