// const { response } = require('express');
const express = require('express');
const router = express.Router();

// const user_model = require('../models/user_model')

router.post('/api/login', (request, response, next) => {
  console.log('request.body', request.body.username);
  console.log('request.data', request.data);
  // console.log('request', request)
  // response.send(request.body)
  // response.send("hello from login!");


  //Create a new user and add them to database. (here we are just trying to return them)
   let newUser = {user_Id: Math.random(), name: request.body.username};
   console.log('newUser', newUser)
    response.send(newUser);

  //route to general channel page
  
  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   })
})

router.get('/api/', (request, response, next) => {
  response.send("hello from api root!");
})


module.exports = router;