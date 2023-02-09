const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

//load env vars 
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

const app=express();

//add body parser
app.use(express.json());

const hospitals = require('./routes/hospitals');
app.use('/api/v1/hospitals',hospitals);

const PORT=process.env.PORT || 5000;
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(()=>process.exit(1));
})