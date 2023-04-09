const Users = require('./user.models');
const Products = require('./product.model');
const Order = require('./order.models');
const Cart = require('./cart.models');
const ProductInCart = require('./productInCart.models');
const ProductInOrder = require('./productInOrder.models');

const initModels = () => {

  // * USERS - PRODUCTS
  Users.hasMany(Products, { foreignKey: 'userId' });
  Products.belongsTo(Users, { foreignKey: 'userId' });

  // * USERS - ORDER
  Users.hasMany(Order, { foreignKey: 'userId' });
  Order.belongsTo(Users, { foreignKey: 'userId' });

  // * USERS - CART
  Users.hasMany(Cart, { foreignKey: 'userId' });
  Cart.belongsTo(Users, { foreignKey: 'userId' });

  // * CART - PRODUCT IN CART
  Cart.hasMany(ProductInCart, { foreignKey: 'cartId' });
  ProductInCart.belongsTo(Cart, { foreignKey: 'cartId' });

  // * PRODUCT - PRODUCT IN CART
  Products.hasMany(ProductInCart, { foreignKey: 'productId' });
  ProductInCart.belongsTo(Products, { foreignKey: 'productId' });

  // * ORDER - PRODUCT IN ORDER
  Order.hasMany(ProductInOrder, { foreignKey: 'orderId' });
  ProductInOrder.belongsTo(Order, { foreignKey: 'orderId' });

  // * PRODUCT - PRODUCT IN ORDER
  Products.hasMany(ProductInOrder, { foreignKey: 'productId' });
  ProductInOrder.belongsTo(Products, { foreignKey: 'productId' });

}

module.exports = initModels;