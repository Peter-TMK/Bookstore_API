const mongoose = require('mongoose');
const CONFIG = require('../config/config');
const logger = require('../logging/logger')

mongoose.set("strictQuery", false);
function connectToDb(){
    mongoose.connect(CONFIG.MONGO_URL);

    mongoose.connection.on('connected', ()=>{
        logger.info('MongoDB connected!')
    })
    mongoose.connection.on('error', (err)=>{
        // console.log(err)
        logger.error(err)
    })
}

module.exports = connectToDb;