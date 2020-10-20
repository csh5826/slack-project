const express = require('express');
const router = express.Router();

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

router.param('channel', function (request, response, next, id) {
    request.channel = channels.find(channel => channel.channel_Id === id);
    next();
});

router.get('/:channel', (request, response, next) => {
    response.send(`The channel you requested is: ${request.channel.name}`);
});


module.exports = router;