"use strict";

//import libraries we need
var React = require('react');
var createClass = require('create-react-class');
var PropTypes = require('prop-types');

//create a 'About' component
var HotelsList = createClass({
	propTypes: {
		hotels: PropTypes.array.isRequired
	},
	
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
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Country</th>
							<th>Hotel Name</th>
						</tr>
					</thead>
				
					<tbody>
				
						{this.props.hotels.map(createHotelRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = HotelsList;

