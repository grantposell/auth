const express = require('express');
const app = express();

//import Routes
const authRoute = require('./routes/auth')


//Route Middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server is up and running'));