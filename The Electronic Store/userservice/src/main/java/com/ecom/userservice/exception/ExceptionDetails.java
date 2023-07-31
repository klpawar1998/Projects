package com.ecom.userservice.exception;

import java.util.Date;


public class ExceptionDetails {

	private String message;
	private Date timestamp;
	
	public ExceptionDetails(String message2, Date date) {
		this.message =message2;
		this.timestamp = date;
	}
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
