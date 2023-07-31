package com.ecom.userservice.service;

import java.security.Key;
import java.time.Instant;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.ecom.userservice.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtServiceImpl implements JwtService {

	private final String secretKey = "scscsccccccccccccccsagadhsyeyyysdydysynnynysnnny224256236236366";

	private Key getSignInKey() {
		byte[] keyBytes = Decoders.BASE64.decode(secretKey);
		return Keys.hmacShaKeyFor(keyBytes);
	}

	@Override
	public String encode(User user) {
		return Jwts.builder()
				.setSubject(user.getUserId().toString())
				.claim("email", user.getEmail())
				.claim("userName", user.getUserName())
				.signWith(getSignInKey())
				.setIssuedAt(Date.from(Instant.now()))
				.compact();
	}

	@Override
	public User decode(String token) {
		Claims claims = Jwts.parserBuilder()
				.setSigningKey(getSignInKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
		Integer userId = Integer.parseInt(claims.getSubject());
		String userName = claims.get("userName", String.class);
		String email = claims.get("email", String.class);
		
		User user = new User();
    	user.setUserId(userId);
    	user.setUserName(userName);
    	user.setEmail(email);
    	user.setToken(token);
    	
		return user;
	}

}
