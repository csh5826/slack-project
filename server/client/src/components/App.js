import React from 'react';
import { setState, useState, useRef, useEffect } from "react";
// import socketio from 'socket.io-client';
import { connect } from "react-redux";
import { fetchChannels } from '../actions';
import { fetchUsers } from '../actions';
import { logoutUser } from '../actions';
import { sendMessage } from '../actions';
import { fetchChannelMessages } from '../actions';
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import SideBar from './SideBar';
import MessageBox from './MessageBox';

// window.render = () => { ReactDOM.render(<App/>, document.getElementById('root'))};
const server = 'http://localhost:5000/'

const App = (props) => {
  //defining state ///
let setup = 0;

const [state, setState] = useState({name: props.loggedInUser.name, message: ''})
const [chat, setChat] = useState([])

  console.log('before  fetch avail channels: ', props.availableChannels);
  console.log('before  fetch online users: ', props.onlineUsers);
  console.log("the props you need  ",  props);
  // TODO add conditional to check if user is logged in....then:
  if (props.loggedInUser.user_Id === 0) {
    //props.history.push('/login');
    
  }
if (props.availableChannels.channel_Id === [])  {
  console.log("here I am, fetching channels");
  props.fetchChannels();
  props.fetchChannelMessages(101);
};
if (props.channelMessages === []) {
  console.log("here I am, fetching messages");
props.fetchChannelMessages(101);
};
if (props.onlineUsers === []) {
  console.log("here I am, fetching users");
  props.fetchUsers();
};

console.log('after fetch avail channels: ', props.availableChannels);
console.log('after fetch online users: ', props.onlineUsers);
console.log('after fetch channel messages: ', props.channelMessages);
  


  const logoutClicked = (event) => {
    console.log('logout button clicked for ', props.loggedInUser.user_Id);
    props.logoutUser(props.loggedInUser.user_Id);
    console.log('logout response is: ', props.logoutUserStatus);
  };

// TO DO 
const renderChat = () => {  
  return chat.map(({name, message}, index) => (
      <div key={index}>
          <li>{name}: <span>{message}</span></li>
      </div>
  ))
}

const messageText = (event) => {

  setState({...state, message: event.target.value});  // for to make button work
  
  if (event.key === "Enter") {
    setState({...state, message: event.target.value});  // for to make button work
    props.sendMessage(props.loggedInUser.user_Id, 101, event.target.value);
    console.log('the send message return', props.sentMessage);
    //TODO - add to chat
    let name = {name : props.loggedInUser.name};
    let message = {message : event.target.value };
    // setChat([...chat, {name, message}])
    event.target.value='';
  };
}
const postMessage = () => {
  console.log('post fake-button clicked');
  props.sendMessage(props.loggedInUser.user_Id, 101, state.message);
  //form["message"].value = '';
  //todo clear field; above line doesn't work
};

  return ( 
    <Container fluid>
    <Row>&nbsp;</Row>
    <Row>
      <SideBar/>
    <Col sm={9}>
    <Button variant="outline-dark" size="sm" className="float-right" onClick={logoutClicked}>Logout</Button>
    <h4>General Channel</h4>
    <MessageBox/>
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
    sentMessage: state.sentMessage,
    channelMessages: state.channelMessages

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchChannels,
      fetchUsers,
      logoutUser,
      sendMessage,
      fetchChannelMessages
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);


