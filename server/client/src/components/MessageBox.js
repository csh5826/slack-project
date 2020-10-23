import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchChannelMessages } from '../actions';
import { bindActionCreators } from "redux";
import { ListGroup } from 'react-bootstrap';

class MessageBox extends Component {

    componentDidMount() {
        console.log('component should mount')
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
            <div className="chat-window" style={{ background: 'snow', height: '90%' }}>
                <ListGroup variant="flush">
                    {this.renderChannelMessages()}
                </ListGroup>
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


