const express = require('express');
const {PORT} = require('./config/server.config');
const homePingController = require('./controllers/home.controller');
const { route } = require('./routes');
const router = require('./routes');
const customRouter = require('./routes/customrouter');

const app = express();

// app.get('/home',homePingController); // this much part is routing layer

app.use('/api', router);  //localhost:3000/api/home              // This is middleware in Express.js
app.use('/custom',customRouter); //localhost:3000/custom/custom2   // Custom Router Middleware


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/**
 * How will u manage these kind of the routes using express router ?
 * 
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 * localhost:3000/api/v2/categories/:id
 * localhost:3000/api/v2/user/:id
 */



















// previou version example
// nodemon never track .env file so if changes in .env file need to restart the server


// const PORT = process.env.PORT; // port for the server. 
// // const PORT = 3000;

// app.listen(process.env.PORT, () => {

//     console.log(`Server is running on port ${process.env.PORT}`);
// });
