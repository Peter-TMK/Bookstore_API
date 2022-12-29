const express = require('express')
const {
    bookValidationMiddleWare,
    updateBookValidationMiddleware
} = require('../validators/book.validator')

const {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
} = require('../controllers/books.controller')

// const bookModel = require('../models/books.model')

const bookRouter = express.Router()

bookRouter.get('/', getAllBooks)

bookRouter.get('/:id', getBookById)

bookRouter.post('/', bookValidationMiddleWare, addBook)

bookRouter.put('/:id', updateBookValidationMiddleware, updateBook)

bookRouter.delete('/:id', deleteBook)


module.exports = bookRouter


