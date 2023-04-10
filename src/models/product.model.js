const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Product = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    availableQty: {
       type: DataTypes.INTEGER,
       defaultValue: 1,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    productImg: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
})

module.exports = Product;