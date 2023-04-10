const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const MinName = 4;
const MaxName = 30;

const Mindescription = 5;

const createProductValidator = [
    check('name', 'Error con mi campo name')
        .exists()
        .withMessage('El name debe existir')
        .isString()
        .withMessage('El name no debe estar vacio')
        .isLength({ min: MinName, max: MaxName })
        .withMessage(`El name debe tener entre ${MinName} y ${MaxName} caracteres`)
    ,
    check('description', 'Error con el description')
        .exists()
        .withMessage('El description no existe')
        .notEmpty()
        .withMessage('No se encontro valor para el description')
        .isString()
        .isLength({ min: Mindescription})
        .withMessage(`El description debe tener Minimo ${Mindescription} carateres`)
    ,
    check('price', 'Error en el price')
        .exists()
        .notEmpty()
        .withMessage('El price no debe estar vacio')
        .isFloat()
        .withMessage('El price debe ser un numero Entero')
    ,
    check('userId')
      .exists()
      .withMessage('La propiedad userId debe existir')
      .notEmpty()
      .withMessage('El userId no debe estar vacio')
      .isInt()
      .withMessage('El userId debe ser un entero for example: [1, 2, 3...]')
    ,
    check('productImg')
       .isURL()
       .withMessage('El productImg tiene que ser una url or direcction img')
    ,
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const updateProductValidator = [
    check('id').isInt().withMessage('el id debe ser un numero entero'),
    check('description')
    .isString()
    .exists()
    .withMessage('No se encuentra la description para el usuario')
    .notEmpty()
    .withMessage('La description no debe ser un string vacio'),

    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    createProductValidator,
    updateProductValidator,
}
