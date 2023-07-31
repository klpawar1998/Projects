package com.ecom.orderservice.exception;

import java.util.Date;

public class ExceptionDetails {
	
	public ExceptionDetails(String message, Date timestamp) {
		super();
		this.message = message;
		this.timestamp = timestamp;
	}
	String message;
	Date timestamp;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	
	
}
