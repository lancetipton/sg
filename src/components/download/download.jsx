import React, { Component } from 'react';


function showHeader(show){
	if(show){
		return(
			<div className='header'>
				<h4 className='title'>
					Download Now
				</h4>
			</div>
		)
	}
}


class Download extends Component {

  constructor(props) {
    super(props);
    this.state = {header: props.header};
  }


	render(){
		return(
			<div className="download-wrapper">
				{ showHeader(this.state.header) }
				<ul className='dl-actions'>
					<li className='dl-action iphone'>
						<a className='iphone-link' href='https://itunes.apple.com/us/app/stormy-goats/id1087164224?ls=1&mt=8' target='_blank'>
							<img className='iphone-img trans-all' src='./dist/assets/images/ios.png' />
						</a>
					</li>
					<li className='dl-action android'>
						<a className='and-link' href='https://play.google.com/store/apps/details?id=com.tiptondigital.sg' target='_blank'>
							<img className='and-img trans-all' src='./dist/assets/images/and.png' />
						</a>
					</li>
				</ul>
			</div>
		);
	}

};

export default Download;