import React, { Component } from 'react';
// import { setState, useState, useRef, useEffect } from "react";
// import socketio from 'socket.io-client';
import { connect } from "react-redux";
import { fetchChannels } from '../actions';
import { fetchUsers } from '../actions';
import { logoutUser } from '../actions';
import { sendMessage } from '../actions';
import { fetchChannelMessages } from '../actions';
import { setChannelId } from '../actions';
import { setCurrentUser } from '../actions';
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import SideBar from './SideBar';
import MessageBox from './MessageBox';
import ChannelTitle from './ChannelTitle';

const server = 'http://localhost:5000/'

class App extends Component {

  componentDidMount(){
      // const [state, setState] = useState({name: this.props.loggedInUser.name, message: ''})
      // const [chat, setChat] = useState([])
      
      if (this.props.loggedInUser.user_Id === 0) {
        console.log('yup, I actually went here');
        this.props.history.push('/login');
      }
      //fill the store //
      this.props.fetchChannels();
      this.props.fetchChannelMessages(this.props.currentChannelId);
      this.props.fetchUsers();

      // console.log('after fetch avail channels: ', this.props.availableChannels);
      // console.log('after fetch online users: ', this.props.onlineUsers);
      // console.log('after fetch channel messages: ', this.props.channelMessages);

      console.log("App.js props are ",  this.props);
    }



  logoutClicked = () => {
    console.log('logout button clicked for ', this.props.loggedInUser.user_Id);
    this.props.logoutUser(this.props.loggedInUser.user_Id);
    this.props.setCurrentUser(0);
    console.log('logout response is: ', this.props.logoutUserStatus);
    this.props.history.push('/login');
  }
  

  messageText = (event) => {

    // setState({...this.state, message: event.target.value});  // for to make button work// make regular var?
    
    if (event.key === "Enter") {
      // setState({...this.state, message: event.target.value});  // for to make button work // make regular var?
      this.props.sendMessage(this.props.loggedInUser.user_Id, this.props.currentChannelId, event.target.value);
      console.log('the send message return', this.props.sentMessage);
      this.props.fetchChannelMessages(this.props.currentChannelId);
      //TODO - add to chat
      // let name = {name : props.loggedInUser.name};
      // let message = {message : event.target.value };
      // setChat([...chat, {name, message}])
      event.target.value='';
    };
  }
  refreshMessages = () => {
    this.props.fetchChannelMessages(this.props.currentChannelId);
  }




    render() {
      return ( 
        <Container fluid>
        <Row>&nbsp;</Row>
        <Row>
          <SideBar/>
        <Col sm={9}>
        <Button variant="outline-dark" size="sm" className="float-right" onClick={this.logoutClicked}><b>Logout</b> {this.props.loggedInUser.name}</Button>
        {/* <h4>{this.channelNameTitle()}</h4> */}
        <ChannelTitle/>
        <MessageBox/>
        <div className="message-composer" style={{background: 'silver', height: 'auto'}}>
          <InputGroup onKeyUp={this.messageText}>
          <FormControl name='message' id='messageId'></FormControl>
        <InputGroup.Append><Button onClick={this.refreshMessages}>Refresh Messages</Button></InputGroup.Append></InputGroup></div>
        </Col>
        </Row>
      </Container>
      
      )};
}

function mapStateToProps(state) {
  return { 
    loggedInUser: state.loggedInUser,
    availableChannels: state.availableChannels,
    onlineUsers: state.onlineUsers,
    logoutUserStatus: state.logoutUserStatus,
    sentMessage: state.sentMessage,
    channelMessages: state.channelMessages,
    currentChannelId: state.currentChannelId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchChannels,
      fetchUsers,
      logoutUser,
      sendMessage,
      fetchChannelMessages,
      setChannelId,
      setCurrentUser 
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);


