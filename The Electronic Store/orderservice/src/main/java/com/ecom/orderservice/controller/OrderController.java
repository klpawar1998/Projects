package com.ecom.orderservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ecom.orderservice.dto.OrderDto;
import com.ecom.orderservice.payload.User;
import com.ecom.orderservice.service.FetchService;
import com.ecom.orderservice.service.OrderService;

@Controller
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@Autowired
	FetchService fetchService;
	
	@PostMapping("save")
	public ResponseEntity<Void> addOrders(@RequestHeader(HttpHeaders.AUTHORIZATION)  String token, @RequestBody List<OrderDto> orders) {
		System.out.println(" ############  token"+token);
		User user = fetchService.getUser(token); 
//		orderItemService.addOrdersOfUser(user.getUserId());
		orderService.addOrderDetails(orders); 
		System.out.println("insert add orders"+ orders.size());
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
}