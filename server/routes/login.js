const express = require('express');
const router = express.Router();
  
router.get('/', (request, response, next) => {
    response.send("welcome to root");
})


router.post('/login', (request, response, next) => {
    response.send("hello from login!")
    // response.send(request.body)
  // //mongoose model-schema style--what will we need for SQL?
  // let user = new User()
  // user.name = request.body.name;  
  // user.push(user.name);

  // user.save((error) => {
  //   if (error) return next(error);
  //   response.end();
  // });
});

module.exports = router;