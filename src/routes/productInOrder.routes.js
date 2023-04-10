const { Router } = require('express');
const { addProductInOrder, getProductInOrder } = require('../controllers/productInOrder.controllers');

const router = Router();

router.get('/api/v1/productinorder', getProductInOrder  )

router.post('/api/v1/productinorder', addProductInOrder )

module.exports = router;