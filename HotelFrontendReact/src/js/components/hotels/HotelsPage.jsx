"use strict";

//import libraries we need
var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var axios = require('axios');
var HotelsApi = require('../../../api/HotelsApi');

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
	componentWillMount: function() {
		HotelsApi.getAllHotels()
		.then(response => {
			console.log("will", response);
			this.setState({
				hotels: response.repos.data
			})
		});

	},
	
	/*
	componentWillUnmount: function() {
		//this.serverRequest.abort();
	},
	*/
	
	render: function() {
		//this is a function that we can use to create the row data
		var createHotelRow = function(hotel) {
			return (
				<tr key={hotel.id}>
					<td><a href={"/#hotel/" + hotel.id}>{hotel.address.country}</a></td>
					<td><a href={"/#hotel/" + hotel.id}>{hotel.name}</a></td>
				</tr>
			)
		};

		return (
			<div>
				<h1>Our Hotels</h1>
				<table className="table table-hover">
					<thead>
						<th>Country</th>
						<th>Hotel Name</th>
					</thead>
				
					<tbody>
				
						{this.state.hotels.map(createHotelRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Hotels;

