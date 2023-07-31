package com.ecom.productservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecom.productservice.dto.ProductDto;
import com.ecom.productservice.entity.Category;
import com.ecom.productservice.entity.Product;
import com.ecom.productservice.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepository productRepository;
	
	@Override
	public List<ProductDto> getProductsByCategory(Integer categoryId) {
		
		List<Product> productList = productRepository.findAllByCategoryCategoryId(categoryId);
		
		List<ProductDto> productDtoList = new ArrayList<ProductDto>();
		
		for(Product temp : productList) {
			
			ProductDto productDto = new ProductDto(); 
			
			productDto.setProductId(temp.getProductId());
			productDto.setProductName(temp.getProductName());
			productDto.setProductImage(temp.getProductImage());
			productDto.setProductDescription(temp.getProductDescription());
			productDto.setProductPrice(temp.getProductPrice());
			productDto.setCategory(temp.getCategory());
			
			productDtoList.add(productDto);
		}
		
		return productDtoList;
	}

	@Override
	public Product getProductByProductId(Integer productId){
	
		return productRepository.findById(productId).get();

	}
	
	@Override
	public List<Product> getHomePageProducts(){
	
		List<Product> productList = productRepository.findAll();
		List<Product> productsByCategory= new ArrayList<Product>();
		Map<Category, List<Product>> productcategorymap = productList.stream().collect(Collectors.groupingBy(Product:: getCategory));
		productcategorymap.forEach((key,value) -> {
			if(key.getCategoryName().equals("Headphones")) {
				productsByCategory.add(value.get(2));
			}else if(key.getCategoryName().equals("Mobiles")) {
				productsByCategory.add(value.get(1));
			}else if(key.getCategoryName().equals("Laptops")) {
				productsByCategory.add(value.get(2));
			}
			
		});
		return productsByCategory;

	}

}
