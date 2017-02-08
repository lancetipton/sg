import App from '../components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import Site from "./Site";


let pageName = document.getElementById('app').getAttribute("td-page");
let page = Site["pages"][pageName];

ReactDOM.render(
	<App page={page} />,
	document.getElementById('app')
);

