import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ChannelTitle extends Component {

    // componentDidMount() {
    //     console.log('component should mount')
    //     this.props.fetchChannelMessages(this.props.currentChannelId);
    // }

    // just the channel name
    renderChannelTitle() {
                console.log('just looking at ', this.props.availableChannels )
                console.log('looking at length ', this.props.availableChannels.length )
                console.log('also looking at ', this.props.currentChannelId)
             for (let x = 0 ; x < this.props.availableChannels.length ; x++) {
                 console.log('looking times ', x )
                if (parseInt(this.props.currentChannelId) === parseInt(this.props.availableChannels[x].channel_Id)){
                    return this.props.availableChannels[x].channelName
                }
             }   
            }
                
        //         let aChnl = this.props.availableChannels.map(chnl => {       
        //     if (chnl.channel_Id === this.props.currentChannelId) {
        //     console.log(`looking at ${chnl.channelName} with ${chnl.channel_Id}`);
        //     return (chnl.channelName)
        //     }
        //     })
        // return aChnl;
          // }

    render() {
        return (
            <div className="channel-title">
                <h4>
                    {this.renderChannelTitle()}
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
