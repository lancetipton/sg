import React, { Component } from 'react';
import MainNav from '../main_nav/main_nav';
import SlideShow from '../slide_show/slide_show';
import Download from '../download/download';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {page: props.page};
  }

	render(){
		return(
			<div className="header-wrapper">
				<Download  />
				<SlideShow />
				<MainNav page={this.state.page} />
			</div>
		);
	}

};

export default Header;

