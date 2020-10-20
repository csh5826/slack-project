const express = require('express');
const router = express.Router();

// const channel_model = require('../models/channel_model')


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


router.get('/api/channel/:channel_Id', (request, response, next) => {
  response.send(`welcome to channel ${request.channel.name}`);
  //Here we want to return a list of all the channels?

  // .then(response => {
  //   res.status(200).send(response);
  // })
  // .catch(error => {
  //   res.status(500).send(error);
  // })
})


router.post('/api/channel/:channel_Id', (request, response, next) => {
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