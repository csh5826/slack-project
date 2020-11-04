import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchChannelMessages, setChannelId } from '../actions';
import { bindActionCreators } from "redux";
import { ListGroup } from 'react-bootstrap';
import { scroller } from "react-scroll";

class MessageBox extends Component {

    componentDidMount() {
        console.log('component should mount')
        this.props.fetchChannelMessages(this.props.currentChannelId);
        // this.scrollToSection('last-msg')
    }

    // renders all messages for a channel
    renderChannelMessages() {
        console.log('props are', this.props);
        let messages = this.props.channelMessages.map(message => {
            let date;
            let dateOne;
            let dateTwo;
            let finalDate;
            let finalDateTwo;
            // converting our time stamp to normal time
            if (message.timestamp === null){
                date = null
                dateOne = null
                dateTwo = null
            }
            else {
                date = message.timestamp;
                dateOne = date.indexOf('T')
                dateTwo = date.indexOf('.')
                finalDate=date.substring(dateOne, dateTwo);
                finalDate = finalDate.substring(1);
                finalDate = finalDate.slice(0, -3)
                finalDateTwo = finalDate.slice(0,2)
                if (finalDateTwo > 12){
                    finalDateTwo = finalDateTwo -12;
                }
                else {
                    finalDateTwo = finalDateTwo
                }
                finalDateTwo = finalDateTwo.toString()
                finalDate = finalDate.slice(2,5)
                finalDate = finalDateTwo.concat(finalDate)
            }
            return (
                <ListGroup.Item className='color'><small className="text-muted">{finalDate}</small> {message.username}: {message.content}</ListGroup.Item>
            )
        });
        const lastTag=Object(<ListGroup.Item className='last-msg'></ListGroup.Item>)
        messages.push(lastTag)
        return messages
    }

    scrollToSection = (scrollyBit) => {
        scroller.scrollTo(scrollyBit, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          containerId: "chat-window",
        });
      };


    render() {
        return (
            <div className="chat-window" id="chat-window" style={{ background: 'snow', height: '90%' }}>
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


