package com.ecom.orderservice.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ecom.orderservice.exception.FailedRequestException;
import com.ecom.orderservice.payload.Product;
import com.ecom.orderservice.payload.User;

@Service
public class FetchServiceImpl implements FetchService {
	
	@Autowired
	private final RestTemplate restTemplate;
	
//	@Value("${product.service.api.url}")
//	private String productServiceUrl;
	
	@Value("${user-service.api.url}")
	private String userServiceUrl;

	@Autowired
	public FetchServiceImpl(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

//	@Override
//	public List<Product> getProductsById(List<Integer> ids) {
//		if (ids == null || ids.size() == 0)
//			return new ArrayList<>();
//		Product[] products = restTemplate.postForObject(productServiceUrl + "/products/", ids, Product[].class);
//		if (products == null)
//			throw new FailedRequestException("Failed to fetch products");
//		return Arrays.asList(products);
//	}

	@Override
	public User getUser(String token) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Authorization", token);
		HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

		ResponseEntity<User> response = restTemplate.exchange(userServiceUrl + "/users/validate", HttpMethod.GET,
				requestEntity, User.class, 0);
		if (!response.getStatusCode().is2xxSuccessful())
			throw new FailedRequestException("Invalid jwt");
		return response.getBody();

	}

}
