package com.ecom.orderservice.service;

import java.util.List;

import com.ecom.orderservice.payload.Product;
import com.ecom.orderservice.payload.User;

public interface FetchService {
//	List<Product> getProductsById(List<Integer> ids);

	User getUser(String token);

}
