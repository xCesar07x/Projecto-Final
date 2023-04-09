const { check } = require('express-validator');
const validateResult = require('../utils/validate');

// * Username
const MinUsername = 5;
const MaxUsername = 30;

// * Email
const MinEmail = 7;
const MaxEmail = 50;

const createUserValidator = [
    check('username', 'Error con mi campo username')
        .exists()
        .withMessage('El username debe existir')
        .isString()
        .withMessage('El username no debe estar vacio')
        .isLength({ min: MinUsername, max: MaxUsername })
        .withMessage(`El username debe tener entre ${MinUsername} y ${MaxUsername} caracteres`)
    ,
    check('email', 'Error con el email')
        .exists()
        .withMessage('El email no existe')
        .notEmpty()
        .withMessage('No se encontro valor para el email')
        .isString()
        .isLength({ min: MinEmail, max: MaxEmail })
        .withMessage(`El email debe tener entre ${MinEmail} y ${MaxEmail} carateres`)
        .isEmail()
        .withMessage('El email o tiene un formato correcto')
    ,
    check('password', 'Error en el password')
        .exists()
        .notEmpty()
        .isString()
        .isLength({ min: 7 })
        .withMessage('El password debe tener un minimo de 7 caracteres')
    ,
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const updateUserValidator = [
    check('id').isInt().withMessage('el id debe ser un numero entero'),
    check('username')
    .isString()
    .exists()
    .withMessage('No se encuentra el nombre para el usuario')
    .notEmpty()
    .withMessage('El nombre no debe ser un string vacio'),
]

module.exports = {
    createUserValidator,
}