const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb+srv://Grant:grant94@mernshopping-ypddp.mongodb.net/test?retryWrites=true',
{ useNewUrlParser: true },
    () => console.log('connected to db!')
);

//import Routes
const authRoute = require('./routes/auth')


//Route Middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server is up and running'));