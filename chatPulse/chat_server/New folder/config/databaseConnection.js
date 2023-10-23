const mongoose = require('mongoose');
require('colors');
require('dotenv');


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MongoURL ,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });

        console.log(`Database is connected ......`.italic.blue)
        
    } catch (error) {
        console.log(`err : ${error}`.red.bold);
    }
}

module.exports = connectDB;