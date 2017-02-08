import React, { Component } from 'react';
import ModalOpener from '../../components/modal/modal_opener';


function getHeaderContent(src){
	return (
		<img className="small-image trans-all" src={src} />
	)
}

class ImageGrid extends Component {



	render(){
		return(
			<div className="row grid-content-wrapper">
				<div className='grid-content small-12 columns'>
					<div className='header pad-bottom-10'>
						<h3 className="title">
							Images
							<hr />
						</h3>
					</div>

					<ul className="mall-block-grid-1 medium-block-grid-2 large-block-grid-3 clearing-thumbs image-grid-items" data-clearing>
						<li>
							<ModalOpener headerContent={getHeaderContent('./dist/assets/images/img01.jpg')}>
								<img src="./dist/assets/images/img01.jpg" />
							</ModalOpener> 
						</li>
						<li>
							<ModalOpener headerContent={getHeaderContent('./dist/assets/images/img02.jpg')}>
								<img src="./dist/assets/images/img02.jpg" />
							</ModalOpener> 
						</li>
						<li>
							<ModalOpener headerContent={getHeaderContent('./dist/assets/images/img03.jpg')}>
								<img src="./dist/assets/images/img03.jpg" />
							</ModalOpener> 
						</li>
						<li>
							<ModalOpener headerContent={getHeaderContent('./dist/assets/images/img04.jpg')}>
								<img src="./dist/assets/images/img04.jpg" />
							</ModalOpener> 
						</li>
						<li>
							<ModalOpener headerContent={getHeaderContent('./dist/assets/images/img05.jpg')}>
								<img src="./dist/assets/images/img05.jpg" />
							</ModalOpener> 
						</li>
						<li>
							<ModalOpener headerContent={getHeaderContent('./dist/assets/images/img06.jpg')}>
								<img src="./dist/assets/images/img06.jpg" />
							</ModalOpener> 
						</li>
					</ul>
				</div>
			</div>
		);
	}

};

export default ImageGrid;


