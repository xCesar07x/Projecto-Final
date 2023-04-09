const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Cart = db.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: false,
})

module.exports = Cart;