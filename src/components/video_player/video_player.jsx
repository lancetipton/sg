import React, { Component } from 'react';
import $ from 'jquery';
import YoutubePlayer from 'react-youtube-player';

class VideoPlayer extends Component {

  constructor(props) {

    let controls = props.controls || 1;
    let showinfo = props.showinfo || 1;


    super(props);
    this.state = {
    	videoid: props.videoid,
        controls: controls,
        showinfo: showinfo,
    };
  }

	render(){

		return(
			<div className='player-wrapper'>
                <YoutubePlayer
                    videoId={this.state.videoid}
                    playbackState='unstarted'
                    configuration={
                        {
                            showinfo: this.state.showinfo,
                            controls: this.state.controls
                        }
                    }
                />
            </div>
		);
	}

};

export default VideoPlayer;