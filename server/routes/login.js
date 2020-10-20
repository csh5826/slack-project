const express = require('express');
const router = express.Router();

// const user_model = require('../models/user_model')

router.post('/api/login', (request, response, next) => {
  // response.send("hello from login!");
  let newUser = {user_Id: Math.random(), name: request};
  response.send(newUser);

  //route to general channel page
  // user_model.createUser()
  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   })
})

module.exports = router;