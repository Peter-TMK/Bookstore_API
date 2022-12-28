const express = require('express');
const bodyParser = require('body-parser');
const CONFIG = require('./config/config');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello Christmas')
    // console.log('server is listening!');
})

app.listen(CONFIG.PORT, () => {
    console.log(`Server started on http://localhost:${CONFIG.PORT}`)
});