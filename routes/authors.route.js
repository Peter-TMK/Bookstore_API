const express = require('express')
const {
    addAuthorValidationMiddleware,
    updateAuthorValidationMiddleware,
} = require('../validators/author.validator')

const {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authors.controller')

// const authorModel = require('../models/authors.model')

const authorRouter = express.Router()

authorRouter.get('/', getAllAuthors)

authorRouter.get('/:id', getAuthorById)

authorRouter.post('/', addAuthorValidationMiddleware, addAuthor)

authorRouter.put('/:id', updateAuthorValidationMiddleware, updateAuthor)

authorRouter.delete('/:id', deleteAuthor)


module.exports = authorRouter


