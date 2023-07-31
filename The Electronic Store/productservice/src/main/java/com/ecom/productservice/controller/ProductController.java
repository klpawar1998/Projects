package com.ecom.productservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.productservice.dto.ProductDto;
import com.ecom.productservice.entity.Product;
import com.ecom.productservice.service.ProductService;


@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

	@Autowired
	ProductService productService;
	
	//http://localhost:8091/products/1
	@GetMapping("/{categoryId}")
	public List<ProductDto> getProductsByCategory(@PathVariable Integer categoryId){
		
		List<ProductDto> products =  productService.getProductsByCategory(categoryId);
		
		return products;
		
	}
	
	@GetMapping("/product/{productId}")
	public Product getProductByProductId(@PathVariable Integer productId){
		
		return productService.getProductByProductId(productId);
		
	}
	
	@GetMapping("/homeProducts")
	public List<Product> getProducts(){
		
		List<Product> productList =  productService.getHomePageProducts();
		
		return productList;
	}
	
}