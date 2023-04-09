const { Router } = require('express');
const { getOrders } = require('../controllers/order.controllers');

const router = Router();

router.get('/api/v1/orders', getOrders )

module.exports = router;