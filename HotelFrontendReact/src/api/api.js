var axios = require('axios')

var hotels = function() {
	return axios.get('http://localhost:8080/hotels/all', { crossdomain: true })
			.then(function(response){
				console.log(response.data); // ex.: { user: 'Your User'}
				console.log(response.status); // ex.: 200
				return response.data;
			});  
};
var HotelsApi = {
	getAllHotels: function() {
		return JSON.parse(JSON.stringify(hotels));
	}
	
};
module.exports = HotelsApi;