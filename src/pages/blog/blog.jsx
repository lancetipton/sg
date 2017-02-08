import React, { Component } from 'react';

class BlogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	page: props.page,
    };
  }


	render(){
		return(
			<div>
				<div className="blog-page row">
					<div className='blog-content small-12 columns'>
						<h4 className='title'>
							{this.state.page.content}
						</h4>
					</div>
				</div>
			</div>
		);
	}

};

export default BlogPage;