import axios from "axios";
import React from "react";

export const placeOrder = async (user) => {

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    
    try {
        const response = await axios.post('http://localhost:8092/orders/save', cartItems, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem("user-jwt-token")),
          },
        });
        if (response.status === 200) return true;
        return false;
      } catch (error) {
        console.error("Error placing the order:", error);
        if (error.response) {
          console.log("Error response data:", error.response.data);
        }
        return false;
      }
};