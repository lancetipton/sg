import React, { Component } from 'react';

import HomePage from '../../pages/home/home';
import PressPage from '../../pages/press/press';
import AboutPage from '../../pages/about/about';
import BlogPage from '../../pages/blog/blog';


const pages = {};

function setPage(page){
	if(pages[page.name]){
		return pages[page.name]({ page: page });
	}
	else{
		pages[page.name] = React.createFactory(require('../../pages/' + page.name + '/' + page.name).default);
		return pages[page.name]({ page: page });
	}
}

class PageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	page: props.page,
    };
  }

	render(){
		return(
			setPage(this.state.page)
		);
	}

};

export default PageContent;
