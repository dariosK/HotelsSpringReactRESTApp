"use strict";

//import libraries we need
var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

//create a 'About' component
var About = createClass({
	render: function() {
		return (
			<div>
				<h1>About this App</h1>
				<p>
					A simple react app for learning a particular 
					stack of technologies that we use including:
				</p>
					<ul>
						<li>React & ReactDOM</li>
						<li>React Router</li>
						<li>Node.js and NPM</li>
						<li>Gulp Task Runner</li>
						<li>Browserify & Bootstrap</li>
						<li>and other supporting NPM plugins</li>
					</ul>
				
			</div>
		);
	}
});

module.exports = About;