package com.ecom.orderservice.service;

import java.util.List;

import com.ecom.orderservice.dto.OrderDto;

public interface OrderService {
 void addOrderDetails(List<OrderDto> orders);
}
