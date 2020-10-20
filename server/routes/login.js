const express = require('express');
const router = express.Router();
const user_model = require('./models/user_model')


router.get('/', (request, response, next) => {
  response.send("welcome to root");
})


router.post('/login', (request, response, next) => {
  response.send("hello from login!");
  user_model.createUser()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})


module.exports = router;