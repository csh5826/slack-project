// const { response } = require('express');
const express = require('express');
const router = express.Router();

//connecting to local mysql database
const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'aissa',
  password        : 'cohortx',
  database        : 'slack-project.sql'
});

//essentially a route for testing
router.get('/api/', (request, response, next) => {
  response.send("hello from api root!");
})

//endpoint for grabbing all users to populate left hand list
router.get('/users', (request, response, next) => {
    // Query the pool
    pool.query('select * from users', function (error, results, fields) {
    // Handle error after the release.
    if (error) throw error;
    //send newUser to front end
    response.send(results);
  });
})

//endpoint for users logging in. Adds user to DB, returns newUser w/ {Id, name, active} to front end
router.post('/login', (request, response, next) => {
  //Create a new user and add them to database
  if (!request.body.username) {alert ("Please add a username")}; else {

     let newUser = {user_Id: Math.floor(Math.random()*50000), name: request.body.username, active: 1};
     // Query the pool
      pool.query('insert into users (user_Id, username, active) values (?, ?, ?)', [newUser.user_Id, newUser.name, newUser.active], function (error, results, fields) {
      // Handle error after the release.
      if (error) throw error;
      //send newUser to front end
      response.send(newUser);
    });
  }
  })

  //endpoint for users logging out. Changes user's active status back to 0 in db
router.post('/logout', (request, response, next) => {
      // Query the pool
      console.log('the logout request has ', request.body.user_Id);
      console.log('a', typeof(request.body.user_Id));
      pool.query('update users set active = 0 where user_Id = ?', request.body.user_Id, function (error, results, fields) {
        // Handle error after the release.
        if (error) throw error;
       let goodUser = request.body.user_Id; //send logged out user to front end as confirmation
        response.send(goodUser);
      });
  })

//endpoint for retrieving all channels - use for left list bar
router.get('/channels', (request, response, next) => {
      // Query the pool
      pool.query('select * from channels', function (error, results, fields) {
      // Handle error after the release.
      if (error) throw error;
      //send channels to front end
      response.send(results);
    });
  })

//endpoint for retrieving one channel with messages
router.get('/channels/:channelId/messages', (request, response, next) => {
    //query the pool
    pool.query('select content, user_Id from messages where channel_Id = ?', request.params.channelId, function (error, results, fields){
    if (error) throw error;
    //send {content: <message>} to front end
    response.send(results)
  })
})

//endpoint to create a new message. 
router.post('/channels/:channelId/messages', (request, response, next) => {
  if (!request.body.content) {alert ("Please add a message")} else {
     // Create the new message
     let newMessage = {message_Id: Math.floor(Math.random()*50000), channel_Id: request.params.channelId, user_Id: request.body.user_Id, content: request.body.content, timestamp: CURRENT_TIME()};
     // Query the pool
     pool.query('insert into messages (message_Id, channel_Id, user_Id, content, timestamp) values (?, ?, ?, ?, ?)', [newMessage.message_Id, newMessage.channel_Id, newMessage.user_Id, newMessage.content, newMessage.timestamp], function (error, results, fields) {
     // Handle error after the release.
     if (error) throw error;
     //send newUser to front end
     response.send(newUser);
  });
}
})

//endpoint to create a new channel. How to handle "user 1 & user 2"
router.post('/channels/:channelId', (request, response, next) => {
  response.send("welcome to create channels");
     // Create the new channel, push it into database. 
     let newChannel = {channel_Id: request.params.channelId, channelName: request.body.channelName};
     // Query the pool
     pool.query('insert into channels (channel_Id, channelName) values (?, ?)', [newChannel.channel_Id, newChannel.channelName], function (error, results, fields) {
     // Handle error after the release.
     if (error) throw error;
     //send newUser to front end
     response.send(newUser);
  });
})


module.exports = router;

