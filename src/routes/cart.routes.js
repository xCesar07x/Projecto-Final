const { Router } = require('express');
const { addCart} = require('../controllers/cart.controllers');


const router = Router();

// router.get('/api/v1/cart' )

router.post('/api/v1/cart', addCart )

module.exports = router;