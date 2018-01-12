$ = jQuery = require('jquery');
//var App = console.log("Browserify is working!");

//import the libraries we need
var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

//also reference the HomePage react component
var Home = require('./js/components/home/HomePage.jsx');
var About = require('./js/components/about/AboutPage.jsx');
var Header = require('./js/components/common/Header.jsx');
var Hotels = require('./js/components/hotels/HotelsPage.jsx');
var axios = require('axios')

var App = createClass ({
	

	render: function() {
		var Child;
		switch (this.props.route) {
			case 'about': Child = About;
				break;
			case 'hotels': Child = Hotels;
				break;
			default: Child = Home;
		}
		return (
			<div>
				<Header />
				<Child />
			</div>
		);
	}
});

function _routeMe() {
	//this gets the part of the url after the '#'
	var route = window.location.hash.substr(1);
	ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', _routeMe);
_routeMe();
//module.exports = App;