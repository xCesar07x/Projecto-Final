const { Router } = require('express');
const { addCart} = require('../controllers/cart.controllers');
const { addCartValidator } = require('../validators/cart.validators');


const router = Router();

router.post('/api/v1/cart', addCartValidator , addCart )

module.exports = router;