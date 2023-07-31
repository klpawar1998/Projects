package com.ecom.userservice.controller;

import jakarta.validation.constraints.NotBlank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.ecom.userservice.dto.UserDto;
import com.ecom.userservice.entity.User;
import com.ecom.userservice.mapper.UserMapper;
import com.ecom.userservice.service.UserService;

@RestController
@RequestMapping("/users")
@Validated
@CrossOrigin
public class UserController {


	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<UserDto> loginUser(@RequestBody @Validated(UserDto.Login.class) UserDto userDto) {
		//log.info("Received request at UserController - loginUser()");
		User user = UserMapper.mapToEntity(userDto);
		User existingUser = userService.loginUser(user);
		return new ResponseEntity<>(UserMapper.mapToDto(existingUser), HttpStatus.OK);
	}

	@PostMapping("/register")
	public ResponseEntity<UserDto> registerUser(@RequestBody @Validated(UserDto.Register.class) UserDto userDto) {
		//log.info("Received request at UserController - registerUser()");
		User user = UserMapper.mapToEntity(userDto);
		User newUser = userService.registerUser(user);
		return new ResponseEntity<>(UserMapper.mapToDto(newUser), HttpStatus.CREATED);
	}

	@GetMapping("/validate")
	public ResponseEntity<UserDto> validateUser(@RequestHeader(HttpHeaders.AUTHORIZATION) @NotBlank String token) {
		//log.info("Received request at UserController - validateUser()");
		User user = userService.validateUser(token);
		return new ResponseEntity<>(UserMapper.mapToDto(user), HttpStatus.OK);
	}
	
	
	
}
