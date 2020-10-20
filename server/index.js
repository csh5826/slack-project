const express = require('express');
const bodyParser = require('body-parser');
const channels = require('./routes/channels');
const login = require('./routes/login');
const root = require('./routes/login');

const app = express();

app.use(function( req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/', root);
app.use('/login', login);
app.use('/channels', channels);

//add what we need for postgres here
// const mongoose = require('mongoose');
// mongoose.connect(keys.MONGODB_URI);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));
  
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


let port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});