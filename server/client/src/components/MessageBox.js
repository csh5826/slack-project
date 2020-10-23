import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchChannels } from '../actions';
import { fetchUsers } from '../actions';
import { fetchChannelMessages } from '../actions';
import { bindActionCreators } from "redux";
import { Row, Container, ListGroup, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import _ from 'lodash';

class MessageBox extends Component {

    componentDidMount() {
        console.log('something should log')
        this.props.fetchChannels();
        this.props.fetchUsers();
        this.props.fetchChannelMessages(101);
    }

    // renders all messages for a channel
    renderChannelMessages() {
        console.log('props are', this.props);
        let messages = this.props.channelMessages.map(message => {
            return (
                <ListGroup.Item action>{message.content}</ListGroup.Item>
            )
        });
        return messages;
    }
    render() {
        return (
<div>
    <div className="chat-window" style={{ background: 'snow', height: '90%' }}>
        <ListGroup variant="flush">
            {this.renderChannelMessages()}
        </ListGroup>


    </div><div className="message-composer" style={{ background: 'silver', height: 'auto' }}>
        <InputGroup>
            <FormControl name='message' id='messageId'></FormControl>
            <InputGroup.Append><InputGroup.Text onClick={postMessage}>Enter</InputGroup.Text></InputGroup.Append></InputGroup></div>
</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        channelMesssages: state.channelMesssages
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchChannelMessages
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);


