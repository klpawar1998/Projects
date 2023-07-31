package com.ecom.userservice.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.userservice.entity.User;
import com.ecom.userservice.exception.UnauthorizedException;
import com.ecom.userservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	private JwtService jwtService;

	
	@Override
	public User registerUser(User user) {
		User existingUser = userRepository.findByEmail(user.getEmail());
		if (existingUser != null)
			throw new UnauthorizedException("Email already registered");
		User newUser = userRepository.save(user);
		newUser.setToken(jwtService.encode(newUser));
		return newUser;
	}

	@Override
	public User loginUser(User user) {
	
		User existingUser = userRepository.findByEmail(user.getEmail());
		if (existingUser == null)
			throw new UnauthorizedException("Email not registered");
		if (!existingUser.getPassword().equals(user.getPassword()))
			throw new UnauthorizedException("Invalid credentials");
		existingUser.setToken(jwtService.encode(existingUser));
		log.info("User logged in successfully: " + existingUser);
		return existingUser;
	}

	@Override
	public User validateUser(String token) {
		User user = jwtService.decode(token);
		log.info("User validated successfully: " + user);
		return user;
	}

}
