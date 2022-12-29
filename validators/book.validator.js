const Joi = require("joi");

const BookSchema = Joi.object({
  title: Joi.string().min(5).max(255).trim().required(),
  shortDescription: Joi.string().min(5).max(500).optional().trim(),
  longDescription: Joi.string().min(10).optional().trim(),
  year: Joi.number().integer().required().max(2022),
  isbn: Joi.string().min(10).max(13).required(),
  price: Joi.number().min(0).required(),
  createdAt: Joi.date().default(Date.now),
  lastUpdateAt: Joi.date().default(Date.now),
});

const BookUpdateSchema = Joi.object({
  title: Joi.string().min(5).max(255).trim(),
  shortDescription: Joi.string().min(5).max(500).trim(),
  longDescription: Joi.string().min(10).trim(),
  year: Joi.number().integer().max(2022),
  isbn: Joi.string().min(10).max(13),
  price: Joi.number().min(0),
});

async function bookValidationMiddleWare(req, res, next) {
  const bookPayload = req.body;

  try {
    await BookSchema.validateAsync(bookPayload);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
}

async function updateBookValidationMiddleware(req, res, next) {
    const bookPayLoad = req.body

    try {
        await BookUpdateSchema.validateAsync(bookPayLoad)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }
}

module.exports = {
    bookValidationMiddleWare,
    updateBookValidationMiddleware,
}
