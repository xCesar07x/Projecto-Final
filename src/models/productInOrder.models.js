const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ProductInOrder = db.define('productinorder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id",  
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

module.exports = ProductInOrder;