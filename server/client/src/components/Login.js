import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentUser } from '../actions';
import { Row, Container, Col, InputGroup, FormControl, Button } from 'react-bootstrap';




//class Login extends Component {
const Login = (props) => {
const submitLogin = (event) => {
  console.log(event.target.value);
  if (event.key === "Enter") {
    props.setCurrentUser(event.target.value);
  }
  //   
  // this.props.signin(formProps, () => {
  //     this.props.history.push('/');
  //   });
  };
  //render() {


  return (
    <Container fluid>
      <Row>&nbsp;</Row>
      <Row>
        <Col></Col>
      <Col md="auto">
      <h3>Enter your name to join:</h3>
      <InputGroup className="mb-3" onKeyDown={submitLogin}><FormControl placeholder="Your name"></FormControl></InputGroup>
      <Button variant="outline-dark" onClick={submitLogin} className="float-right">Login</Button>
      </Col>
      <Col></Col>
      </Row>
    </Container>
          
        
  );
}
//}

function mapStateToProps(state) {
  return { user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps ) (Login);
 