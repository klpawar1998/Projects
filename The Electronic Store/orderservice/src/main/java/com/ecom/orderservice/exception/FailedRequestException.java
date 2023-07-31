package com.ecom.orderservice.exception;

public class FailedRequestException extends RuntimeException {
	
    public FailedRequestException() {
		super();
	}

	public FailedRequestException(String message) {
        super(message);
    }
}
