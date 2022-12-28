const Joi = require("joi");

const BookSchema = Joi.object({
  title: Joi.string().min(5).max(255).trim().required(),
  shortDescription: Joi.string().min(5).max(500).optional().trim(),
  longDescription: Joi.string().min(10).optional().trim(),
  year: Joi.number().integer().required().max(2022),
  price: Joi.number().min(0).required(),
  createdAt: Joi.date().default(Date.now),
  lastUpdateAt: Joi.date().default(Date.now),
});

async function BookValidationMiddleWare(req, res, next){
    const bookPayload = req.body

    try {
        await BookSchema.validateAsync(bookPayload)
        next()
    } catch(error) {
        next(error.details[0].message)
    }
}

module.exports = BookValidationMiddleWare;