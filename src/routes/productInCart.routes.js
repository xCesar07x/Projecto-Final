const { Router } = require('express');
const { addProductInCart, getProductInCart } = require('../controllers/productInCart.controllers');


const router = Router();

router.get('/api/v1/productincart', getProductInCart )

router.post('/api/v1/productincart', addProductInCart )

module.exports = router;