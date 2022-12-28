const mongoose = require('mongoose');
const CONFIG = require('../config/config');

function connectToDb(){
    mongoose.connect(CONFIG.MONGO_URL);

    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB connected!')
    })
    mongoose.connection.on('error', (err)=>{
        console.log('Error!')
        console.log(err)
    })
}

module.exports = connectToDb;