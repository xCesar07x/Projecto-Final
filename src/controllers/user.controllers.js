const UserServices = require("../services/user.services");
const transporter  = require("../utils/mailer");

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).send();
        await transporter.sendMail({
            from: 'mathcesar02@gmail.com',
            to: result.email,
            subject: 'Verifica tu correo',
            html: `
            <p> Hola ${result.username} Bienvenido al Ecommerce </p>
            <p> Es necesario que verifiques tu correo </p>
            `
        })
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, avatar } = req.body;
        await UserServices.update(id, { username, avatar })
        res.status(204).send();
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    updateUser,
}