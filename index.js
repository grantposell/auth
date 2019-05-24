const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//import Routes
const authRoute = require('./routes/auth')

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_Connect,{ useNewUrlParser: true },
    () => console.log('connected to db!')
);

//Middleware
app.use(express.json());


//Route Middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server is up and running'));