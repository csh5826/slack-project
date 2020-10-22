const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketio = require('socket.io');

const channels = require('./routes/channels');
const login = require('./routes/login');
const root = require('./routes/login')

// const { request } = require('express');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/api/', root);
app.use('/api/login', login);
app.use('/api/channels', channels);


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

let port = process.env.PORT || 5000;
//socketio set up
const server = http.createServer(app);
const io = socketio(server);

// setting up the connection event
io.on('connection', (socket) => {
  console.log('new user connected')
  // once connected all users pushed into general room by default
  socket.on('room', (room) => {
    socket.join(room);
  })
// room needs to be data.roomId from server
let room = 'general'
  //emmit the message in correct room
  socket.on('message', ({name, message}) => {
    console.log('received a message')
    io.sockets.in(room).emit('message', {name, message })
  })
});

// when room is joined, query DB to update that room with the user id etc

// when message sent, query db to save message data into

server.listen(port, function () {
  console.log('Listening on port ' + port);
});


