const Boom = require('@hapi/boom')

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property] // .body(post) - .params(get) 
    const { error } = schema.validate(data, { abortEarly: false})
    if (error) {
      next(Boom.badRequest(error))
    }
    next()
  }
}

module.exports = validatorHandler;
