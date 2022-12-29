# Bookstore_API Structure

- GET / (unprotected) ==> Home route to display Bookstore home content
- GET /login (unprotected) ==> Authenticate a new user
- GET /logout (unprotected) ==> Logout a user

## Author Routes
- GET /api/v1/authors (protected) ==> Return all authors
- GET /api/v1/authors/:id (protected) ==> Get an author by ID
- POST /api/v1/authors (protected) ==> Adds an author to the DB
- PUT /api/v1/authors/:id (protected) ==> Updates an author by ID
- DELETE /api/v1/authors/:id (protected) ==> Delete an author by ID

## Book Routes
- GET /api/v1/books (protected) ==> Return all books
- GET /api/v1/books/:id (protected) ==> Get a book by ID
- POST /api/v1/books (protected) ==> Adds a book to the DB
- PUT /api/v1/books/:id (protected) ==> Updates a book by ID
- DELETE /api/v1/books/:id (protected) ==> Delete a book by ID

## Other Middleware
- Validating : using joi
- Rate Limiting : using express-rate-limit
- Security middleware : using helmet
- Good logging : using winston, morgan and  morgan-json
