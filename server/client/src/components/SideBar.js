import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { fetchChannels } from '../actions';
import { fetchUsers } from '../actions';
import { setChannelId } from '../actions';
import { fetchChannelMessages } from '../actions';
import { bindActionCreators } from "redux";
import { ListGroup, Col } from 'react-bootstrap';

class SideBar extends Component {

    componentDidMount() {
        console.log('something should log')
        this.props.fetchChannels();
        this.props.fetchUsers();
    }
    
    changeChannel = (event) => {
        // console.log('changeChannel event:', event.target.getAttribute("data-channel_Id"))
        this.props.setChannelId(event.target.getAttribute("data-channel_Id"));
        this.props.fetchChannelMessages(event.target.getAttribute("data-channel_Id"));
    }

    //renders all channels
    renderChannelGroup() {
        let channels = this.props.availableChannels.map(channel => {
            console.log('yer currentChannelId ', this.props.currentChannelId)
            console.log('and yer channel.channel_Id ', channel.channel_Id)
                if (this.props.currentChannelId == channel.channel_Id ) {
                    console.log('yer bolded, ', channel.channelName)
                    return (<ListGroup.Item action key={channel.channel_Id} data-channel_Id={channel.channel_Id} onClick={this.changeChannel}><b>{channel.channelName}</b></ListGroup.Item>)
                } else 
                    console.log('yer not bolded, ', channel.channelName)
                    return (<ListGroup.Item action key={channel.channel_Id} data-channel_Id={channel.channel_Id} onClick={this.changeChannel}>{channel.channelName}</ListGroup.Item>)
        });
        return channels;
    }
    // render all users 
    renderUserGroup() {
        let users = this.props.onlineUsers.map(user => {
            let theValue='connected'
            user.active ? theValue = 'logged-in': theValue = 'logged-out'
            return (
                <ListGroup.Item key={user.username} value={theValue}>{user.username}</ListGroup.Item>
            )
        });
        return users;
    }
    render() {
        return (
<Fragment>
    <Col sm={3}>
        <div className="channels-list" style={{ background: 'azure', height: 'auto' }}>
            <ListGroup variant="flush">
                <ListGroup.Item variant="success"><b>Channels</b></ListGroup.Item>
                {this.renderChannelGroup()}
                <ListGroup.Item>&nbsp;</ListGroup.Item>
            </ListGroup>
        </div>

        <div className="users-list" style={{ height: 'auto' }}>
            <ListGroup variant="flush">
                <ListGroup.Item variant="info"><b>Users</b></ListGroup.Item>
                {this.renderUserGroup()}
            </ListGroup>
        </div>
    </Col>
</Fragment>          
        )
    }
}

function mapStateToProps(state) {
    return {
        availableChannels: state.availableChannels,
        onlineUsers: state.onlineUsers,
        currentChannelId: state.currentChannelId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchChannels,
            fetchUsers,
            setChannelId,
            fetchChannelMessages
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);


