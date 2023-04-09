const { Router } = require('express');
const { createProduct, getProducts, updateProduct } = require('../controllers/product.controllers');

const router = Router();

router.get('/api/v1/product', getProducts)

router.post('/api/v1/product', createProduct)

router.put('/api/v1/product/:id', updateProduct)

module.exports = router;