import React from 'react';
import { useState, useRef, useEffect } from "react";
// import socketio from 'socket.io-client';
import { connect } from "react-redux";
import { fetchChannels } from '../actions';
import { fetchUsers } from '../actions';
import { logoutUser } from '../actions';
import { sendMessage } from '../actions';
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import SideBar from './SideBar'

const server = 'http://localhost:5000/'
// TODO sockets
// const io = socketio(server);
// io.on('connection', () => {
//   console.log('we are connected with the backend')
// })  

const App = (props) => {
  let checkChannels = [1];
  console.log('before  fetch avail channels: ', props.availableChannels);
  console.log('before  fetch online users: ', props.onlineUsers);
  console.log("the props you need  ",  props);
  // TODO add conditional to check if user is logged in....then:
  if (props.loggedInUser.user_Id === 0) {
    props.history.push('/login');
  }
if (props.availableChannels.channel_Id === 0) {
  props.fetchChannels();
  props.fetchUsers();
  //.then(
  // console.log(props.availableChannels);
  // console.log(props.onlineUsers);

  // return availableChannels
};
console.log('after fetch avail channels: ', props.availableChannels);
console.log('after fetch online users: ', props.onlineUsers);
  

const postMessage = (event) => {
    console.log('post button clicked');
  };
  const logoutClicked = (event) => {
    console.log('logout button clicked for ', props.loggedInUser.user_Id);
    logoutUser(props.loggedInUser.user_Id);
    console.log('logout response is: ', props.logoutUserStatus);
  };

//defining state
const [state, setState] = useState({name: props.loggedInUser.name, message: ''})
const [chat, setChat] = useState([])

//ref hook
const socketRef = useRef();
// TODO
// socket listening for our message action, setchat is pulling all previous chat and making sure it is displayed
// io.on('message', ({name, message}) => {
//   setChat([...chat, {name, message}])
// })
// renderChat sockets version
// const renderChat = () => {
//     return chat.map(({name, message}, index) => (
//         <div key={index}>
//             <li>{name}: <span>{message}</span></li>
//         </div>
//     ))
// }

// renderChat api version
const renderChat = () => {  
  return chat.map(({name, message}, index) => (
      <div key={index}>
          <li>{name}: <span>{message}</span></li>
      </div>
  ))
}

const messageText = (event) => {
  // console.log(`event target ${event.target.name} and value ${event.target.value}`);
  setState({...state, message: event.target.value});  // for to make button work
  
  if (event.key === "Enter") {
    setState({...state, message: event.target.value});  // for to make button work
    // sockets version code on line below
    // io.emit('message', {name: props.loggedInUser.name, message: event.target.value});
    // sending message via API. 
    //  **** Hardcoded for channel 101 right now ****
    sendMessage(props.loggedInUser.user_Id, 101, event.target.value);
    console.log('the send message return', props.sentMessage);
    event.target.value = '';
  };
}
//
// const onTextChange = (e) => {
//     setState({...state, [e.target.name]: e.target.value})
//     console.log(state)
// }

// const onMessageSubmit = (e) => {
//     e.preventDefault();
//     const {name, message} = state
//     io.emit('message', {name, message})
//     setState({message: '', name})
    

// }

  return ( 
    <Container fluid>
    <Row>&nbsp;</Row>
    <Row>
      <SideBar/>
    <Col sm={9}>
    <Button variant="outline-dark" size="sm" className="float-right" onClick={logoutClicked}>Logout</Button>
    <h4>General Channel</h4>

    
    <div className="chat-window" style={{background: 'snow', height: '90%'}}>
      <ListGroup variant="flush">
        {renderChat()}
      </ListGroup>


    </div><div className="message-composer" style={{background: 'silver', height: 'auto'}}>
      <InputGroup onKeyUp={messageText}>
      <FormControl name='message'></FormControl>
    <InputGroup.Append><InputGroup.Text onClick={postMessage}>{props.loggedInUser.name}</InputGroup.Text></InputGroup.Append></InputGroup></div>
    </Col>
    </Row>
  </Container>
  
  );
}

function mapStateToProps(state) {
  return { 
    loggedInUser: state.loggedInUser,
    availableChannels: state.availableChannels,
    onlineUsers: state.onlineUsers,
    logoutUserStatus: state.logoutUserStatus,
    sentMessage: state.sentMessage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchChannels,
      fetchUsers,
      logoutUser,
      sendMessage
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);


