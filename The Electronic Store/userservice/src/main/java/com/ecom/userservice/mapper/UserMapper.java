package com.ecom.userservice.mapper;

import com.ecom.userservice.dto.UserDto;
import com.ecom.userservice.entity.User;

public class UserMapper {

	public static UserDto mapToDto(User user) {
		UserDto userDto = new UserDto();
		
		userDto.setUserId(user.getUserId());
		userDto.setUserName(user.getUserName());
		userDto.setEmail(user.getEmail());
		userDto.setPassword(user.getPassword());
		userDto.setToken(user.getToken());
		
        return userDto;
    }

    public static User mapToEntity(UserDto userDto) {
    	
    	User user = new User();

    	user.setUserId(userDto.getUserId());
    	user.setUserName(userDto.getUserName());
    	user.setEmail(userDto.getEmail());
    	user.setPassword(userDto.getPassword());
    	user.setToken(userDto.getToken());
    	return user;
    } 
    
}
