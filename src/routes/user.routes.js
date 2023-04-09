const { Router } = require('express');
const { createUserValidator } = require('../validators/user.validators');
const { createUser, updateUser } = require('../controllers/user.controllers');



const router = Router();


router.post('/api/v1/user', createUserValidator, createUser)

router.put('/api/v1/user/:id', updateUser )


module.exports = router;