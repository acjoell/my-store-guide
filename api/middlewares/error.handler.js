const { ValidationError } = require('sequelize')

function logErrors(err, req, res, next) {
  console.log("LogError");
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log("ErrorHandler");
  res.status(500).json({
    message: err.message,
  });
}

function queryErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    throw boom.conflict(err.errors[0].message)
  }
  next(err)
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, queryErrorHandler, boomErrorHandler };
