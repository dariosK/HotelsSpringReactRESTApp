package com.dk;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.querydsl.core.types.dsl.BooleanExpression;

@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RestController
@RequestMapping("/hotels")
public class HotelController {
	private HotelRepository hotelRepository;
	
	public HotelController(HotelRepository hotelRepository) {
		this.hotelRepository = hotelRepository;
	}
	
	//@CrossOrigin
	@GetMapping("/all")
	public List<Hotel> getAll(){
		List<Hotel> hotels = this.hotelRepository.findAll();
		
		return hotels;
	}
	
	@PutMapping
	public void insert(@RequestBody Hotel hotel) {
		this.hotelRepository.insert(hotel);
	}
	
	@PostMapping
	public void update(@RequestBody Hotel hotel) {
		this.hotelRepository.save(hotel);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") String id) {
		this.hotelRepository.delete(id);
	}
	
	@GetMapping("/{id}")
	public Hotel getById(@PathVariable("id") String id) {
		Hotel hotel = this.hotelRepository.findById(id);
		
		return hotel;
	}
	
	@GetMapping("/price/{maxPrice}")
	public List<Hotel> getByPricePerNight(@PathVariable("maxPrice") int maxPrice) {
		List<Hotel> hotels = this.hotelRepository.findByPricePerNightLessThan(maxPrice);
		
		return hotels;
	}
	
	@GetMapping("/address/{city}")
	public List<Hotel> getByCity(@PathVariable("city") String city) {
		List<Hotel> hotels = this.hotelRepository.findByCity(city);
		
		return hotels;
	}
	
	@GetMapping("/country/{country}")
	public List<Hotel> getByCountry(@PathVariable("country") String country){
		
		//create a query class (QHotel)
		QHotel qHotel = new QHotel("hotel");
		
		//using the query class we can create the filters
		BooleanExpression filterByCountry = qHotel.address.country.eq(country);
		
		// we can pass the filters the findAll() method
		List<Hotel> hotels = (List<Hotel>) this.hotelRepository.findAll(filterByCountry);
		
		return hotels;
	}
	@GetMapping("/recommended")
	public List<Hotel> getRecommended() {
		final int maxPrice = 100;
		final int minRating = 7;
		
		//create a query class (QHotel)
		QHotel qHotel = new QHotel("hotel");
		
		//using the query class we can create the filters
		BooleanExpression filterByPrice = qHotel.pricePerNight.lt(maxPrice);
		BooleanExpression filterByRating = qHotel.reviews.any().rating.gt(minRating);
		
		// we can pass the filters the findAll() method
		List<Hotel> hotels = (List<Hotel>) this.hotelRepository.findAll(filterByPrice.and(filterByRating));
		
		return hotels;
	}
	
}
