"use strict";

//import libraries we need
var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

//create a 'HOME' component
var Home = createClass({
	render: function() {
		return (
			<div className = "jumbotron">
				<h1>Hotels</h1>
				<h2>Hotels available for Ericsson employee</h2>
			</div>
		);
	}
});

module.exports = Home;