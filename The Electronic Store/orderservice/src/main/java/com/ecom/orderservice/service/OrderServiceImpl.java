package com.ecom.orderservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.orderservice.dto.OrderDto;
import com.ecom.orderservice.entity.OrderItem;
import com.ecom.orderservice.mapper.OrderMapper;
import com.ecom.orderservice.repository.OrderItemRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderItemRepository itemRepository;
	


	@Override
	public void addOrderDetails(List<OrderDto> orders) {
		
		List<OrderItem> orderItemList = new ArrayList<OrderItem>();
		OrderMapper orderMapper = new OrderMapper();
		orderItemList = orderMapper.extracted(orders);
		
	// save operation 
		itemRepository.saveAll(orderItemList);
	}




}
