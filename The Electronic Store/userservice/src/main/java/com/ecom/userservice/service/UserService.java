package com.ecom.userservice.service;

import com.ecom.userservice.entity.User;

public interface UserService {

	User registerUser(User user);

	User loginUser(User user);

	User validateUser( String token);  

}
