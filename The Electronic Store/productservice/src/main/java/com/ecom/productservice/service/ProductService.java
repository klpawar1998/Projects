package com.ecom.productservice.service;

import java.util.List;

import com.ecom.productservice.dto.ProductDto;
import com.ecom.productservice.entity.Product;

public interface ProductService {

	public List<ProductDto> getProductsByCategory(Integer categoryId);

	public Product getProductByProductId(Integer productId);

	List<Product> getHomePageProducts();

	
}
