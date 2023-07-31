package com.ecom.orderservice.mapper;

import java.util.ArrayList;
import java.util.List;

import com.ecom.orderservice.dto.OrderDto;
import com.ecom.orderservice.entity.OrderItem;
import com.ecom.orderservice.payload.Product;

public class OrderMapper {


	public List<OrderItem> extracted(List<OrderDto> orders) {
		
		List<OrderItem> orderItemList  =  new ArrayList<>();
		
		for(OrderDto orderDto : orders) {
			
			OrderItem orderItem = new OrderItem(); 
			
			Product product =  new Product();
			product.setImageUrl(orderDto.getProductImage());
			product.setProductId(orderDto.getProductId());
			product.setSellingPrice(orderDto.getProductPrice());
			product.setProductName(orderDto.getProductName());
			
			orderItem.setProduct(product);
			orderItem.setTotalPrice(orderDto.getTotalPrice());
			orderItem.setQuantity(orderDto.getTotalQuantity());
//			orderItem.setProductId(orderDto.g);
//			orderItem.setProductName(orderDto.getProduct());
//			orderItem.setProductImage(orderDto.getProductImage());
//			orderItem.setProductDescription(orderDto.getProductDescription());
//			orderItem.setProductPrice(orderDto.getProductPrice());
//			orderItem.setCategory(orderDto.getCategory());
//			
			orderItemList.add(orderItem);
		}
		return orderItemList;
	}
}
