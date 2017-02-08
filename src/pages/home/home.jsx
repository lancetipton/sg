import React, { Component } from 'react';
import Download from '../../components/download/download';
import ModalOpener from '../../components/modal/modal_opener';
import VideoPlayer from '../../components/video_player/video_player';


function getHeaderContent(){
	return (
		<div className='header-content'>
	    <div className="header">
	      <h4 className='title trans-all'>
	        Watch the Trailer
	      </h4>
	    </div>
	    <div className="image-wrapper">
	    	<img className="header-image" src="http://img.youtube.com/vi/o-KdQiObAGM/0.jpg" />
	    </div>
		</div>
	)
}

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	page: props.page,
    };
  }

	render(){
		return(
			<div className="home-page">
				<div className='modal-opener-wrapper row'>
					<div className='modal-opener-content margin-top-20'>
						<ModalOpener headerContent={getHeaderContent()}>
							<VideoPlayer videoid='o-KdQiObAGM' />
						</ModalOpener>
					</div>
				</div>

				<div className="home-content row collapse">
					<div className="home-wrapper small-12 margin-top-30">
					 	<div className='info-wrapper small-12 columns pad-bottom-20'>
					 		
					 		<div className='header pad-bottom-20'>
						 		<h3 className='title' >
						 			The Story
						 		</h3>
						 		<hr />
					 		</div>

					 		<div className='info'>
					 			<p className='info-point'>
					 				<span className='text'>
										There's a storm coming in and Farmer Jon's goats are in trouble. They're out eat'in grass and don't know of the dangers looming. He's paying you to come in and save the day. So grab your boots and grab your barrels. It's goat rolling time. 
					 				</span>
					 			</p>
					 			<p className='info-point'>
					 				<span className='text'>
										Load the goats in the barrel and roll'em down the hill. Watch out for rocks, fire, and lightning. Try to get them all to the barn before the storm comes in. Be on the look out for items that can help you navigate the rocky terrain. 
					 				</span>
								</p>
								<p className='info-point'>
									<span className='text'>
										Collect coins as you play, and use them in the store to buy items. The more goats you score the more money you make. 
									</span>
								</p>
								<p className='info-point'>
									<span className='text'>
										Create and account and save your progress. Login on any device and keep playing where you left off.
									</span>
								</p>
					 		</div>
					 	</div>


					 	<div className='reviews-wrapper small-12 columns pad-bottom-40'>

					 		<div className='header pad-bottom-20'>
						 		<h3 className='title' >
						 			Reviews
						 		</h3>
						 		<hr />
					 		</div>

					 		<div className='reviews'>
					 			<ul className='reivew-items'>
					 				<li className='review margin-top-10'>
							 				<span className='text'>
												“This is awesome! My kids really loved playing the game, they can't stop laughing every time they lose a goat lol.﻿”
												<span className='name'>
													- Eanna5 ( Reddit User ) / ★★★★★
												</span>
											</span>
					 				</li>
					 				<li className='review margin-top-10'>
							 				<span className='text'>
												“Wow, This Game is super addictive. I can't stop playing it.”
												<span className='name'>
													- Jeff Berkly / ★★★★★
												</span>
											</span>
									</li>
									<li className='review margin-top-10'>
										<span className='text'>
											“I couldn't stop smiling! The intro voice is amazing!!”
											<span className='name'>
												- ChosenWolf ( Reddit User ) / ★★★★★
											</span>
										</span>
									</li>

									<li className='review margin-top-10'>
										<span className='text'>
											“Best Goat game on the market. A great take on a familiar concept.”
											<span className='name'>
												- Nick Davidson / ★★★★★
											</span>
										</span>
									</li>
									<li className='review margin-top-10'>
										<span className='text'>
											“Who's voice is that? That farmer is super funny. He adds so much to the game.”
											<span className='name'>
												- Tel Tipton / ★★★★★
											</span>
										</span>
									</li>
					 			</ul>

					 		</div>
					 	</div>

					</div>
				</div>
			</div>
		);
	}

};

export default HomePage;
