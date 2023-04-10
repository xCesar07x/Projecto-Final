const express = require('express');
const db = require('./utils/database');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const initModels = require('./models/initModels');
const ApiRoutes = require('./routes');
const errorHandlerRouter = require('./routes/errorHandler.routes');

initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT =  process.env.PORT || 8000;

db.authenticate()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => {
        console.log('Base de datos exitosa');
    })
    .catch((error) => {
        console.log(error);
    });

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
ApiRoutes(app);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// * Middleware Error
errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});