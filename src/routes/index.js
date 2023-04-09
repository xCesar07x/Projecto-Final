const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const authRoutes = require('./auth.routes');
const orderRoutes = require('./order.routes');

const ApiRoutes = (app) => {
    app.use(userRoutes);
    app.use(authRoutes);
    app.use(productRoutes);
    app.use(cartRoutes);
    app.use(orderRoutes);
}

module.exports = ApiRoutes;