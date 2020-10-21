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
 

router.post('/login', (request, response, next) => {

  //Create a new user and add them to database. (here we are just trying to return them)
   let newUser = {user_Id: Math.floor(Math.random()*50000), name: request.body.username, active: 1};
    // response.send(newUser);
 
      // Use the connection
      pool.query('insert into users (user_Id, username, active) values (?, ?, ?)', [newUser.user_Id, newUser.name, newUser.active], function (error, results, fields) {
     
        // Handle error after the release.
        if (error) throw error;
        response.send(newUser);
      });
  })

router.get('/api/', (request, response, next) => {
  response.send("hello from api root!");
})

const channels = [
  {
    channel_Id: '101',
    name: "General",
    firstUser_Id: null,
    secondUser_Id: null
  },
  {
    channel_Id: '102',
    name: "Javascript",
    firstUser_Id: null,
    secondUser_Id: null
  },
  {
    channel_Id: '103',
    name: "Clark/Jim",
    firstUser_Id: '1',
    secondUser_Id: '3'
  },
  {
    channel_Id: '104',
    name: "Daniel/PJ",
    firstUser_Id: '2',
    secondUser_Id: '4'
  }
]

router.param('channel_Id', function (request, response, next, id) {
  request.channel = channels.find(channel => channel.channel_Id === id);
  next();
});


router.get('/channel/:channel_Id', (request, response, next) => {
  response.send(`welcome to channel ${request.channel.name}`);
  //Here we want to return a list of all the channels?

  // .then(response => {
  //   res.status(200).send(response);
  // })
  // .catch(error => {
  //   res.status(500).send(error);
  // })
})


router.post('/channel/:channel_Id', (request, response, next) => {
  response.send("welcome to create channels");

  // Create the new channel, push it into database. (here we just return the channel object)
  //let newChannel = {channel_Id: Math.random(), channelName: request.body};
  // response.send(newChannel);


  // .then(response => {
  //   res.status(200).send(response);
  // })
  // .catch(error => {
  //   res.status(500).send(error);
})

module.exports = router;

  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   })