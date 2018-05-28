const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Set and point to static folder
 app.use(express.static(__dirname + '/dist')); 

// Include custom routing
//const myRoute = require('./routes/myRoute');

// Body-Parser middleware
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose/MongoDB middleware
const db = require('./config/database');
// Remove global promise warning
mongoose.Promise = global.Promise;
// Connect server to database
mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Use your custom routes before the catch all is executed
//app.use('/myRoute', myRoute)

//catch all non custom routes and send to Angular Router.
app.get('*/', (req, res) => { 
    res.sendfile(path.join(__dirname + '/dist/index.html'));
})

// Set port, use process.env.PORT if using Heroku. You can change the port number to suit yourself. 
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})