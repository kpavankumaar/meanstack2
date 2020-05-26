"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    mongoose    = require('mongoose'),
    app         = express(),
    customers   = JSON.parse(fs.readFileSync('data/customers.json', 'utf-8')),
    states      = JSON.parse(fs.readFileSync('data/states.json', 'utf-8'));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//The dist folder has our static resources (index.html, css, images)
app.use(express.static(__dirname + '/dist')); 

app.get('/api/customers/page/:skip/:top', (req, res) => {
    const topVal = req.params.top,
          skipVal = req.params.skip,
          skip = (isNaN(skipVal)) ? 0 : +skipVal;  
    let top = (isNaN(topVal)) ? 10 : skip + (+topVal);

    if (top > customers.length) {
        top = skip + (customers.length - skip);
    }

    console.log(`Skip: ${skip} Top: ${top}`);
    Product.find(function (err, customersData) {
        //console.log("data from database ", customersData);
        var pagedCustomers = customersData.slice(skip, top);
        res.setHeader('X-InlineCount', customersData.length);
        res.json(pagedCustomers);
    })
    // var pagedCustomers = customers.slice(skip, top);
    // res.setHeader('X-InlineCount', customers.length);
    // res.json(pagedCustomers);
});

app.get('/api/customers', (req, res) => {
    Product.find(function(err, customersData){
        console.log("data from database ", customersData);
        res.json(customersData);
    })
    //res.json(customers);
});

app.get('/api/customers/:id', (req, res) => {
    let customerId = +req.params.id;
    let selectedCustomer = {};
    console.log("customer id ", customerId);
    Product.find({id:customerId}, (err, savedData) => {
        
        if (err) {
            //console.log(err);
            res.status(500);
            res.send('internal server error');
        } else {
            console.log("get Data by Id", savedData)
            res.json(savedData);
        }
    })
        
    // for (let customer of customers) {
    //     if (customer.id === customerId) {
    //        selectedCustomer = customer;
    //        break;
    //     }
    // }  
});

app.post('/api/customers', (req, res) => {
    let postedCustomer = req.body;
    // let maxId = Math.max.apply(Math,customers.map((cust) => cust.id));
    postedCustomer.id = ++Product.count();
    postedCustomer.gender = (postedCustomer.id % 2 === 0) ? 'female' : 'male';
    var product = new Product(req.body);
    product.save(function(err, savedProduct){
        if(err){
            //console.log(err);
            res.status(500);
            res.send('internal server error');
        }else{
            res.status(201);
            res.json(savedProduct);
        }
    })
    //customers.push(postedCustomer);
    //res.json(postedCustomer);
});

app.put('/api/customers/:id', (req, res) => {
    let putCustomer = req.body;
    let id = +req.params.id;
    let status = false;

    //Ensure state name is in sync with state abbreviation 
    const filteredStates = states.filter((state) => state.abbreviation === putCustomer.state.abbreviation);
    if (filteredStates && filteredStates.length) {
        putCustomer.state.name = filteredStates[0].name;
        //console.log('Updated putCustomer state to ' + putCustomer.state.name);
    }

    for (let i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === id) {
            customers[i] = putCustomer;
            status = true;
            break;
        }
    }
    res.json({ status: status });
});

app.delete('/api/customers/:id', function(req, res) {
    let customerId = +req.params.id;
    Product.findByIdAndRemove(customerId, function(err){
        res.status(204); // No Content
        res.json({ status: true });
    })
    // for (let i=0,len=customers.length;i<len;i++) {
    //     if (customers[i].id === customerId) {
    //        customers.splice(i,1);
    //        break;
    //     }
    // }  
});

app.get('/api/orders/:id', function(req, res) {
    let customerId = +req.params.id;
    for (let cust of customers) {
        if (cust.customerId === customerId) {
            return res.json(cust);
        }
    }
    res.json([]);
});

app.get('/api/states', (req, res) => {
    res.json(states);
});

app.post('/api/auth/login', (req, res) => {
    var userLogin = req.body;
    //Add "real" auth here. Simulating it by returning a simple boolean.
    res.json(true);
});

app.post('/api/auth/logout', (req, res) => {
    res.json(true);
});

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000);

console.log('Express listening on port 3000.');

// mongodb 
var Product = mongoose.model('Product',{
    id: Number,
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    city: String,
    state: Object,
    orders: Object,
    latitude: Number,
    longitude: Number
})
// connect to data base
mongoose.connect("mongodb://localhost/nbits-products", function () {
    console.log("connected to db ")
})


//Open browser
var opn = require('opn');

opn('http://localhost:3000').then(() => {
    console.log('Browser closed.');
});


