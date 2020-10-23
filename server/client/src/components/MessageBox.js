import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchChannelMessages, setChannelId } from '../actions';
import { bindActionCreators } from "redux";
import { ListGroup } from 'react-bootstrap';

class MessageBox extends Component {

    componentDidMount() {
        console.log('component should mount')
        this.props.fetchChannelMessages(this.props.currentChannelId);
    }

    // renders all messages for a channel
    renderChannelMessages() {
        console.log('props are', this.props);
        let messages = this.props.channelMessages.map(message => {
            return (
                <ListGroup.Item>{message.user_Id}: {message.content}</ListGroup.Item>
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
        channelMessages: state.channelMessages,
        currentChannelId: state.currentChannelId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchChannelMessages,
            setChannelId
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);


