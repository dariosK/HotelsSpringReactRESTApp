"use strict";

//import libraries we need
var React = require('react');
var createClass = require('create-react-class');
var axios = require('axios');
var HotelsApi = require('../../../api/HotelsApi');
var HotelsList = require('./HotelsList.jsx');

//create a 'About' component
var Hotels = createClass({
	getInitialState: function() {
		return {
			//we'll just return an empty array in case
			//there are no values in the 'database'
			hotels: []
		}
	},
	
	componentDidMount: function() {
			if (this.isMounted()) {
				HotelsApi.getAllHotels()
				.then(response => {
					console.log("will", response);
					this.setState({
					hotels: response.repos.data
				})
			})};
			/*
			axios.get('http://localhost:8080/hotels/all', { crossdomain: true })
			.then(response => {
				console.log(response.data); // ex.: { user: 'Your User'}
				console.log(response.status); // ex.: 200
				console.log(response);
				this.setState({
					hotels: response.data
				})
			})
			*/			
	},
	/* //fetch by Did after change constructs of Hotels builds by components
	componentWillMount: function() {
		HotelsApi.getAllHotels()
		.then(response => {
			console.log("will", response);
			this.setState({
				hotels: response.repos.data
			})
		});

	},
	*/
	
	/*
	componentWillUnmount: function() {
		//this.serverRequest.abort();
	},
	*/
	
	render: function() {


		return (
			<div>
				<h1>Our Hotels</h1>
				<HotelsList hotels = {this.state.hotels} />
			</div>
		);
	}
});

module.exports = Hotels;

