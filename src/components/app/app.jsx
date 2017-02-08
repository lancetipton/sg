import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import PageContent from '../page_content/page_content';

	
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	page: props.page,
    };
  }

	render() {
		return(
			<div>
				<Header page={this.state.page} />
				<PageContent page={this.state.page} />
				<Footer />
			</div>
		);
	};



};

export default App;

