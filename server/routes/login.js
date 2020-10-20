const { response } = require('express');
const express = require('express');
const router = express.Router();

// const user_model = require('../models/user_model')


router.post('/api/login', (request, response, next) => {
  // response.send(request.body)
  response.send("hello from login!");

  //Create a new user and add them to database. (here we are just trying to return them)
// let newUser = {user_Id: Math.random(), name: request.body};
// response.send(newUser);

})


module.exports = router;