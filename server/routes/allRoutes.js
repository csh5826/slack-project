// const { response } = require('express');
const express = require('express');
const router = express.Router();

//connecting to local mysql database
const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'clark',
  password        : 'g0thers@',
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
  if (!request.body.username) {console.log ("Please add a username")}; 

     let newUser = {user_Id: Math.floor(Math.random()*50000), name: request.body.username, active: 1};
     // Query the pool
      pool.query('insert into users (user_Id, username, active, timestamp) values (?, ?, ?, CURRENT_TIMESTAMP)', [newUser.user_Id, newUser.name, newUser.active], function (error, results, fields) {
      // Handle error after the release.
      if (error) throw error;
      pool.query('select user_Id, username, active, timestamp from users where user_Id = ?', newUser.user_Id, function(error, results, fields) {
      if (error) throw error;
      response.send(results[0]);
    })
    });
  
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
    console.log(`getting group messages for channel ${request.params.channelId}`);
    pool.query('select content, user_Id from messages where channel_Id = ?', request.params.channelId, function (error, results, fields){
    if (error) throw error;
    console.log(results)
    //send {content: <message>} to front end
    response.send(results)
  })
})

//endpoint to create a new message. 
router.post('/channels/:channelId/messages', (request, response, next) => {
  if (!request.body.content) console.log(`create message with ${request.body.content} and userid ${request.body.user_Id} and channel ${request.params.channelId}`);
     // Create the new message
     let newMessage = {message_Id: Math.floor(Math.random()*50000), channel_Id: request.params.channelId, user_Id: request.body.user_Id, content: request.body.content};
     // Query the pool
     pool.query('insert into messages (message_Id, channel_Id, user_Id, content, timestamp) values (?, ?, ?, ?, CURRENT_TIMESTAMP)', [newMessage.message_Id, newMessage.channel_Id, newMessage.user_Id, newMessage.content], function (error, results, fields) {
     // Handle error after the release.
     if (error) throw error;
     pool.query('select message_Id, channel_Id, content, user_Id, timestamp from messages where message_Id = ?', newMessage.message_Id, function(error, results, fields) {
     if (error) throw error;
     response.send(results[0]);
     })
  });
})

//endpoint to create a new channel/conversation
router.post('/channels', (request, response, next) => {
     //If a channelName is submitted, use it. Otherwise, name the channel for users.
     let newChannelName  = '';
     if (request.body.channelName) {
       newChannelName = request.body.channelName
     } else {
       newChannelName = `${request.body.firstUserId}/${request.body.secondUserId}`;
     }
     //define the new channel's parameters
     let newChannel = {channel_Id: Math.floor(Math.random()*50000), channelName: newChannelName, firstUser_Id: request.body.firstUserId, secondUser_Id: request.body.secondUserId};
     // Query the pool
     pool.query('insert into channels (channel_Id, channelName, firstUser_Id, secondUser_Id) values (?, ?, ?, ?)', [newChannel.channel_Id, newChannel.channelName, newChannel.firstUser_Id, newChannel.secondUser_Id], function (error, results, fields) {
     if (error) throw error;
     //select the new channel and return it
     pool.query('select channel_Id, channelName, firstUser_Id, secondUser_Id from channels where channel_Id = ?', newChannel.channel_Id, function (error, results, fields) {
     //send newUser to front end
     response.send(results);
     })
  });
})


module.exports = router;

