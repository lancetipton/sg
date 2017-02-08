import React, { Component } from 'react';
import $ from 'jquery';


class SideInfo extends Component {

	render(){
		return(
			<div className="side-info-wrapper">
				<div className="detail">
					<h5 className="no-margin">
					Developer:
					</h5>
					Lance Tipton
				</div>

				<div className="detail">
					<h5 className="no-margin">
						Release Date:
					</h5>
					January 1, 2016
				</div>

				<div className="detail">
					<h5 className="no-margin">
						Platforms:
					</h5>
					IOS<br />
					Android
				</div>

				<div className="detail">
					<h5 className="no-margin">
						Price:
					</h5>
					Free with ads<br />
					0.99$ - no ads
				</div>

				<div className="detail">
					<h5 className="no-margin">
						Website:
					</h5>
					www.stormygoats.com
				</div>
			</div>
		);
	}

};

export default SideInfo;