import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentUser } from '../actions';
import { Row, Container, Col, InputGroup, FormControl, Button } from 'react-bootstrap';



 
class Login extends Component {

submitLogin = (event) => {
  console.log(event.target.value);
    if (event.key === "Enter") {
      this.props.setCurrentUser(event.target.value);
      
      //insert delay or promise here?
      setTimeout(this.props.history.push('/'), 5000);
    }
  };
submitLoginButton() {
  console.log('clicked it')
}


render() {
  return (
    <div>
    <Container fluid>
    
      <Row>&nbsp;</Row>
      <Row>
        <Col></Col>
      <Col md="auto">
        <h2>PROJECT SLACK by COHORT X</h2>
      <h3>Enter your name to join:</h3>
      <InputGroup className="mb-3" onKeyUp={this.submitLogin} name="login-form"><FormControl placeholder="Your name"></FormControl></InputGroup>
      <Button variant="outline-dark" onClick={this.submitLoginButton} className="float-right">Login</Button>
      </Col>
      <Col></Col>
      </Row>
          </Container>
      </div>    
        
  );
  }
}

function mapStateToProps(state) {
  return { loggedInUser: state.loggedinUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
 