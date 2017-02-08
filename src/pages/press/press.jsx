import React, { Component } from 'react';
import ImageGrid from '../../components/image_grid/image_grid';
import SideInfo from '../../components/side_info/side_info';
import $ from 'jquery';



class PressPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	page: props.page,
    };
  }

	render(){
		return(
			<div className="press-content row collapse pad-bottom-10">
				<div className="pressKit-wrapper small-12 margin-top-20 columns">
					<ImageGrid />
					<div className="row">

						<div className='header small-12 margin-top-20 columns'>
							<h3 className="no-margin title pad-bottom-20">
								Information
								<hr />
							</h3>
						</div>

						<div className="small-12 medium-3 columns">
							<SideInfo />
						</div>

						<div className="small-12 medium-9 columns description">
							
							<h4>
								Description
								<hr />
							</h4>

							<p>
								Farmer Jon’s paying you to get his goats back to the farm before the storm comes in. Load the goats into a barrel, and roll it down the hill. Watch out for rocks, fires, and lightining. Along the way you will pick up items and collect coins. Use the items to help complete the levels and the coins to buy more items. Be carful not to drop the goats. Going too fast or taking to much damage to the barrel will cause the goats to fall out.
							</p>
							<p>
								Once the storm comes in things may get a bit harder. The goats get scared and start to lose their wit, which will make them do crazy things. 
							</p>

							<h4>
								Features
								<hr />
							</h4>
							<ul>
								<li>
									Evolving sky and storm system.
								</li>
								<li>
									Awesome barrel arcade physics
								</li>
								<li>
									Play the entire game without spending a dollar.
								</li>
								<li>
									Option to buy more coins, and remove ads.
								</li>
								<li>
									In game coins system, where the more you play the more you make.
								</li>
								<li>
									Barrel enhancing items to give you the goat roll'in edge
								</li>
								<li>
									Easy to pickup, but hard to master game mechanics
								</li>
								<li>
									Thunderstorm system that affects the temperament of the goats
								</li>
								<li>
									Increasing difficulty with each level you play
								</li>
								<li>
									Level timing system, where the faster you finish the more points you earn.
								</li>
								<li>
									Share your scores with friends through Facebook, Twitter, and more.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}

};

export default PressPage;