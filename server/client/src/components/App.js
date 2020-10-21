import React from 'react';
import { useState, useRef } from "react";
import socketio from 'socket.io-client';
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
const server = 'http://localhost:5000/'

const io = socketio(server);
io.on('connection', () => {
  console.log('we are connected with the backend')
})  

const App = (props) => {
  console.log("the props you need  ",  props);
  const postMessage = (event) => {
    console.log('post button clicked');
  };
  const logoutClicked = (event) => {
    console.log('logout button clicked');
  };

//defining state
const [state, setState] = useState({name: props.loggedInUser.username, message: ''})
const [chat, setChat] = useState([])

//ref hook
const socketRef = useRef();

// socket listening for our message action, setchat is pulling all previous chat and making sure it is displayed
io.on('message', ({name, message}) => {
  setChat([...chat, {name, message}])
})

const renderChat = () => {
    return chat.map(({name, message}, index) => (
        <div key={index}>
            <li>{name}: <span>{message}</span></li>
        </div>
    ))
}

const messageText = (event) => {
  console.log(`event target ${event.target.name} and value ${event.target.value}`);
  // setState({...state, message: event.target.value})
  // console.log('messageText state manipulation: ', state)
  if (event.key === "Enter") {
    io.emit('message', {name: props.loggedInUser.username, message: event.target.value});
    // setState({...state, message: event.target.value})
    // const {name, message} = state
    // io.emit('message', {name, message})
    // setState({message: '', name})
    event.target.value = '';
  };
}

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
      <Col sm={3}>
      <div className="channels-list" style={{background: 'azure', height: 'auto'}}>
        <ListGroup variant="flush">
          <ListGroup.Item variant="success"><b>Channels</b></ListGroup.Item>
          <ListGroup.Item action>General</ListGroup.Item>
          <ListGroup.Item action>Javascript</ListGroup.Item>
          <ListGroup.Item action>Clark/Jim</ListGroup.Item>
          <ListGroup.Item action>Daniel/PJ</ListGroup.Item>
          <ListGroup.Item>&nbsp;</ListGroup.Item>
        </ListGroup></div>
      <div className="users-list" style={{background: 'antiquewhite', height: 'auto'}}>
        <ListGroup variant="flush">
          <ListGroup.Item variant="info"><b>Users</b></ListGroup.Item>
          <ListGroup.Item action>PJ</ListGroup.Item>
          <ListGroup.Item action>Clark</ListGroup.Item>
          <ListGroup.Item action>Aissa</ListGroup.Item>
          <ListGroup.Item action>Jim</ListGroup.Item>
          <ListGroup.Item action>Daniel</ListGroup.Item>
      </ListGroup> </div>
      
      </Col>
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
    <InputGroup.Append><InputGroup.Text onClick={postMessage}>{props.loggedInUser.username}</InputGroup.Text></InputGroup.Append></InputGroup></div>
    </Col>
    </Row>
  </Container>
  
  );
}

function mapStateToProps(state) {
  return { loggedInUser: state.loggedInUser}
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//     },
//     dispatch
//   );
// }

export default connect(mapStateToProps) (App);

    {/* <form onSubmit={onMessageSubmit}><TextField name='message'onChange = {e => onTextChange(e)} value={state.message}label='message' /></form> */}

    {/* <ListGroup.Item style={{background: 'snow'}}><b>PJ</b>  <i style={{color: 'lightgrey', fontSize: 'smaller'}}> time 12:34pm </i>WordsWords blahblah stuffftuff meaningless stuff</ListGroup.Item>
      <ListGroup.Item style={{background: 'snow'}}><b>Jim</b>  <i style={{color: 'lightgrey', fontSize: 'smaller'}}> time 12:34pm </i>Things and other things and stuff</ListGroup.Item>
      <ListGroup.Item style={{background: 'snow'}}><b>Daniel</b>  <i style={{color: 'lightgrey', fontSize: 'smaller'}}> time 12:34pm </i>More things than that!</ListGroup.Item>
      <ListGroup.Item style={{background: 'snow'}}><b>Aissa</b>  <i style={{color: 'lightgrey', fontSize: 'smaller'}}> time 12:34pm </i>And nicer things.</ListGroup.Item>
      <ListGroup.Item style={{background: 'snow'}}><b>PJ</b>  <i style={{color: 'lightgrey', fontSize: 'smaller'}}> time 12:34pm </i>So many things</ListGroup.Item> */}