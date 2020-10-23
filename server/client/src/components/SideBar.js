import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchChannels } from '../actions';
import { fetchUsers } from '../actions';
import { fetchChannelMessages} from '../actions';
import { bindActionCreators } from "redux";
import { ListGroup, Col } from 'react-bootstrap';
import _ from 'lodash';

class SideBar extends Component {

    componentDidMount() {
        console.log('something should log')
        this.props.fetchChannels();
        this.props.fetchUsers();
        this.props.fetchChannelMessages(101);
    }

    //renders all channels
    renderChannelGroup() {
        // console.log('props are', this.props);
        let channels = this.props.availableChannels.map(channel => {
            return (
                <ListGroup.Item action>{channel.channelName}</ListGroup.Item>
            )
        });
        return channels;
    }
    // render all users 
    renderUserGroup() {
        let users = this.props.onlineUsers.map(user => {
            return (
                <ListGroup.Item action>{user.username}</ListGroup.Item>
            )
        });
        return users;
    }
    render() {
        return (
<div>
    <Col sm={3}>
        <div className="channels-list" style={{ background: 'azure', height: 'auto' }}>
            <ListGroup variant="flush">
                <ListGroup.Item variant="success"><b>Channels</b></ListGroup.Item>
                {this.renderChannelGroup()}
                <ListGroup.Item>&nbsp;</ListGroup.Item>
            </ListGroup></div>

        <div className="users-list" style={{ background: 'antiquewhite', height: 'auto' }}>
            <ListGroup variant="flush">
                <ListGroup.Item variant="info"><b>Users</b></ListGroup.Item>
                {this.renderUserGroup()}
            </ListGroup> </div>
    </Col>
</div>           
        )
    }
}

function mapStateToProps(state) {
    return {
        availableChannels: state.availableChannels,
        onlineUsers: state.onlineUsers
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchChannels,
            fetchUsers,
            fetchChannelMessages
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);


