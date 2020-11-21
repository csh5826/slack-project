import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentUser } from "../actions/index";
import {
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";

import footerimage from "../components/assets/c-customer-510.jpg";
import logoimage from "../components/assets/hashtagbubble.png"

class Login extends Component {
  submitLogin = (event) => {
    console.log('here ',event.target.value);
    if (event.key === "Enter") {
      // setTimeout(() => {
        this.props.setCurrentUser(event.target.value);
        this.props.history.push("/Chat");
      //  }, 500);

      // setTimeout(() => {
      //   //insert delay or promise here?
      //   this.props.history.push("/");
      // }, 1000);
    }
  };

  submitLoginButton = (event) => {
    console.log(document.getElementById("name-entry").value);
    console.log("props", this.props);

    setTimeout(() => {
      this.props.setCurrentUser(document.getElementById("name-entry").value);
    }, 500);

    setTimeout(() => {
      //insert delay or promise here?
      this.props.history.push("/Chat");
    }, 1000);
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>&nbsp;</Row>
          <Row>
            <Col>
            
            </Col>
            <Col md="auto">
            <Image
              src={logoimage}
              className="d-block mx-auto img-fluid w-90"
            ></Image>
              <h3>Welcome</h3>
              <InputGroup className="login-form" onKeyUp={this.submitLogin} >
                <FormControl
                  id="name-entry"
                  placeholder="Enter your name..."
                ></FormControl>
              </InputGroup>
              <Button
                variant="outline-dark"
                onClick={this.submitLoginButton}
                className="float-right">
                Continue
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Image
              src={footerimage}
              className="d-block mx-auto img-fluid w-90"
            ></Image>
          </Row>
        </Container>
      </div>
    );
  }
}

// onKeyUp={this.submitLogin}
// function mapStateToProps(state) {
//   return { loggedInUser: state.loggedinUser };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentUser,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Login);
