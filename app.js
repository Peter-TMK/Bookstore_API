const express = require('express');
const bodyParser = require('body-parser');
const CONFIG = require('./config/config');
const connectToDb = require('./db/mongodb');
 
const app = express();

// db connection
connectToDb();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello Christmas')
    // console.log('server is listening!');
})

// error handler middleware
app.use((err, req, res, next) => {
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send('An error occured!')
    next()
});

app.listen(CONFIG.PORT, () => {
    console.log(`Server started on http://localhost:${CONFIG.PORT}`)
});