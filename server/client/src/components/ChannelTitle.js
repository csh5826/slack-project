import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ChannelTitle extends Component {

    // componentDidMount() {
    //     console.log('component should mount')
    //     this.props.fetchChannelMessages(this.props.currentChannelId);
    // }

    // renders all messages for a channel
    renderChannelTitle() {
        let aChnl = this.props.availableChannels.map(chnl => {       
            if (chnl.channel_Id === this.props.currentChannelId) {
              console.log(`looking at ${chnl.channelName} with ${chnl.channel_Id}`);
              return (<span>{chnl.channelName}</span>)
              }
            })
        return aChnl;
          } 

    render() {
        return (
            <div className="channel-title">
                <h4>
                    {/* {this.renderChannelTitle() */}
                </h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        availableChannels: state.availableChannels,
        currentChannelId: state.currentChannelId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
         
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelTitle);


