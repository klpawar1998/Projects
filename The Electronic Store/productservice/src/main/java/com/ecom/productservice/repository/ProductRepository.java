package com.ecom.productservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.productservice.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	List<Product> findAllByCategoryCategoryId(Integer categoryId);
	
	Optional<Product> findById(Integer productId);
	
}
