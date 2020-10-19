const router = require('express').Router();
const { request, response } = require('express');
//include what we need for the postgres db

router.post('/login', (request, response, next) => {
    
    //mongoose model-schema style--what will we need for SQL?
    let user = new User();
  
    user.name = request.body.name;  
    user.push(user.name);

    user.save((error) => {
      if (error) return next(error);
      response.end();
    });
  });