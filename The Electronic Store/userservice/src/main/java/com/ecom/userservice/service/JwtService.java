package com.ecom.userservice.service;

import com.ecom.userservice.entity.User;

public interface JwtService {

	String encode(User user);

	User decode(String token);

}
