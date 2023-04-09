const { DataTypes, FLOAT } = require('sequelize');
const db = require('../utils/database');


const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    totalPrice: {
        type: FLOAT,
        defaultValue: 0,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    status: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false,
})

module.exports = Order;