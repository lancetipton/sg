import React, { Component } from 'react';
import MainNav from '../main_nav/main_nav';
import Download from '../download/download';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {page: props.page};
  }

	render(){
		return(
			<div className="footer-wrapper">
				<div className="footer-image-wrapper">
					<img className='footer-image' src='./dist/assets/images/level.png' />
					<img className='footer-image image-2' src='./dist/assets/images/level02.png' />
				</div>				
				<div className='footer row pad-bottom-10'>
					<div className="footer-top-section margin-top-30">
						<div className='bottom-download-wrapper small-12 columns'>
							<Download />
						</div>
						<div className='contact-info'>
							<ul className='footer-items'>
								<li className='item margin-top-5'>
									<a className='contact' href='mailto:ltipton@tiptondigital.com'>
										Contact
									</a>
								</li>
								<li className='item margin-top-5'>
									<a className='link' href='http://www.tiptondigital.com' target="_blank">
										TiptonDigital.com
									</a>
								</li>
								<li className='item margin-top-5'>
									<div className='copyright'>
											<span className='text'>
												Tipton Digital LLC 2016 © 
											</span>
									</div>
								</li>
							</ul>
						</div>
						<div className='create-by margin-top-15'>
							<span className='text'>
								Created By: Lance Tipton
							</span>
						</div>

					</div>
				</div>
			</div>
		);
	}

};

export default Footer;
