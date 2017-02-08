import React, { Component } from 'react';

class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	page: props.page,
    };
  }


	render(){
		return(
			<div>
				<div className="about-wrapper margin-top-20">
					<div className='about-info-wrapper row'>
						<div className='small-12 columns about-info'>
							<h3>
								About
								<hr />
							</h3>
							<p>
								Stormy Goats was created by Lance Tipton. The idea came about while eating dinner with his family. They were talking about different mobile games, and what was fun about them. During the conversation the idea of rolling pigs down a hill in a barrel came up. Because Lance likes goats, and pigs have been done many times over, he decided to change it to goats. He needed a reason to roll the goats down the hill in a barrel, other wise that would just be mean. So that's where the storm came in.
							</p>
							
							<p>
								Lance Tipton currently works as a web developer for Simple View Inc. in AZ. He enjoys clean code, video games, and his wife’s cooking.
							</p>
						</div>
					</div>

					<div className="row pics-wrapper">
						<div className="iamges-wrapper small-12 columns">

							<ul className="small-block-grid-1 large-block-grid-3 clearing-thumbs family-images" data-clearing>
								<li>
									<img src="./dist/assets/images/wife.jpg" />
									<br/>
									Lance and Elvia Tipton
								</li>
								<li>
									<img src="./dist/assets/images/cards.jpg" />
									<br/>
									Playing Gin Rummy
								</li>
								<li>
									<img src="./dist/assets/images/family.jpg" />
									<br/>
									The Tipton Family
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		);
	}

};

export default AboutPage;