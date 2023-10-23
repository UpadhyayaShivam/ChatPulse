const express = require('express');
const cors = require('cors');
const connectDB = require('./config/databaseConnection');
const userRouter = require('./src/routes/userRoute');
require('colors');
require('dotenv').config();

// connecting database
connectDB();
const app = express();
const PORT = 6979 || process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

app.use('/api',userRouter);  

// for testing
// app.get('/',(req,res)=>{
//     res.send("hello");
// });


app.listen(PORT,()=>{
    try {
        console.log(`server is running on ${PORT}`.america.bgBlue.black);
    } catch (err) {
        console.log(`err : ${err}`.bgRed);
    }
})


