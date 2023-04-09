const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mathcesar02@gmail.com',
        pass: 'jlhvgsnfcibblykn' 
    }
})

module.exports = transporter;