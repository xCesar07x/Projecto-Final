const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const addCartValidator = [
    check('userId')
    .isInt()
    .withMessage('El userId deber ser un numero entero')
    .exists()
    .withMessage('No se encuentra el Id para el usuario')
    .notEmpty()
    .withMessage('El userId no debe ser un numero vacio'),
    check('totalPrice')
     .isFloat()
     .withMessage('El totalprice debe ser un numero entero')
     .exists()
     .withMessage('EL totalPrice debe existir')
     .notEmpty()
     .withMessage('El totalPrice no debe estar vacio')   
    ,

    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    addCartValidator,
    
}