const express = require('express'); // get express function
const bodyParser = require('body-parser');
// When we call the function expresss we create a new express server object

const app = express(); // http server object

const PORT = 3000;
// add routes

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


// express middleware 
function m1(req, res, next) {
    console.log(" Inside Middleware m1");
    // return res.json({msg: 'not ok'});
    // m2(req, res);
    console.log("Req.user inside m1", req.user); // undefined

    req.user = {id : 1, email: 's@s.com'};
    next();

}

function m2(req, res, next) {
    console.log('Inside middleware m2');
    console.log('Req.user inside m2', req.user); // {....}
    next();
}


// final call back function at the end of middleware chain.
app.get('/home',m1, m2, (req, res) => {
    // everytume someone calls /home route , this callback will be called
    console.log("/home called")
    
    console.log(req.url,req.query);

    return res.json({msg: 'ok'}); // here we are passing a js object
})

app.get('/products/:product_id/rating/:rate',(req,res) => {
    // :id part is variable and products is static
    // :id part is your url params and overall these kind of routes are called as dynamic routes
    console.log(req.params);
    const pid = req.params.product_id;
    return res.json({productId: pid, rating: req.params.rate });

});

app.post('/data', (req,res) =>{
    console.log(req.body)
    return res.json({msg: 'ok'});
})


app.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`)
});


// How can the client send custom data to the server
/**
 * 1. URL Prarams  ---> /product/1 
 * 2. Query Params ---> ?key1=value1=value2&key2=value2&key3=balue3....
 * 3. Request Body ---> sensitive information send via request body
 * 
 */


// all http application layer