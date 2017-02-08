import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MainNav extends Component {

	constructor(props){
    super(props);
    this.state = {
    	"showNav":"main-nav-items small-12 columns closed trans-all",
    	"menu" : "closed",
    };
	}

	render(){
		return(
			<div className="main-nav-wrapper row">
				<div className='mobile-menu-header'  onClick={this.toggleMainNav.bind(this)}>
					<h3 className='title'>
						<span className='text'>
							Menu
						</span>
						<FontAwesome name='times' className={this.state.menu} />
						<FontAwesome name='bars' className={this.state.menu} />
					</h3>
				</div>
				<ul className={this.state.showNav} >
						<li className='nav-item first'>
							<a className='nav-link' href='./dist/index.html'>
								<FontAwesome name='home' />
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='./dist/pages/press/press.html'>
								<FontAwesome name='newspaper-o' />
								Press Kit
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='./dist/pages/about/about.html'>
								<FontAwesome name='user' />
								About
							</a>
						</li>
						<li className='nav-item facebook'>
							<a className='nav-link facebook' href='https://www.facebook.com/stormygoats/' target="_blank">
								<FontAwesome name='facebook-official' />
								 Facebook
							</a>
						</li>
				</ul>
			</div>
		);
	}

	toggleMainNav() {
	    let css =(this.state.showNav === "main-nav-items small-12 columns closed trans-all")? "main-nav-items small-12 columns open trans-all" : "main-nav-items small-12 columns closed trans-all";

	    let fa = (this.state.menu === "closed")? "open" : "closed";

	    this.setState({"showNav":css, "menu": fa});
	}

};

export default MainNav;