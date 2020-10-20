import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import ChatBoxTest from "./chatboxtest";
function App() {
  return (
    <ChatBoxTest/>
  );
}

function mapStateToProps(state) {
  return { user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps ) (App);
