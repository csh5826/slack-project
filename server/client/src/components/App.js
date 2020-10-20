import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import ChatBoxTest from "./chatboxtest";
function App() {
  return (
    <Container fluid>
    <Row>&nbsp;</Row>
    <Row>
      <Col></Col>
    <Col md="auto">
    <h3>General Channel</h3>
    <ChatBoxTest/>

    
    </Col>
    </Row>
  </Container>
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
