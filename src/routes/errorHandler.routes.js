const { logError } = require('../middlewares/error.handler');

const errorHandlerRouter = (app) => {
  app.use(logError);

  app.use((error, req, res, next) => {
    res.status(400).json(error);
   });
}

module.exports = errorHandlerRouter;