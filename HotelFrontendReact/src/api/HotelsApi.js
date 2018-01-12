"use strict";
var axios = require('axios');
var hotelsVar = [];

var getRepos = function() {
	return axios.get('http://localhost:8080/hotels/all', { crossdomain: true })
}
var hotels = function() {
	return axios.get('http://localhost:8080/hotels/all', { crossdomain: true })
			.then(response => {
				
				({ hotelsVar: response.data});
				console.log("Intenal", hotelsVar);
				return hotelsVar;
			});  
};

var HotelsApi = {
	getAllHotels: function() {
		return axios.all([getRepos()])
			.then(function(arr){
				return {
					repos: arr[0]
				}
			})
		
	}
};

module.exports = HotelsApi;