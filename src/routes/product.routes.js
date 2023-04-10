const { Router } = require('express');
const { createProduct, getProducts, updateProduct } = require('../controllers/product.controllers');
const { createProductValidator, updateProductValidator } = require('../validators/product.validators');

const router = Router();

router.get('/api/v1/product', getProducts)

router.post('/api/v1/product', createProductValidator ,createProduct)

router.put('/api/v1/product/:id', updateProductValidator , updateProduct)

module.exports = router;