import React, { Component } from 'react';

class SlideShow extends Component {
	
	render(){
		return(
			<div className='slides-wrapper'>
				<ul className='slides'>
						<li className='slide'>
							<div className='image-wrapper'>
								<img className='slide-img' src='./dist/assets/images/header-back.png' />
							</div>
							<div className="logo-wrapper">
								<img className='logo-image' src='./dist/assets/images/logo.png' />
							</div>
						</li>
				</ul>
			</div>
		);
	}

};

export default SlideShow;
