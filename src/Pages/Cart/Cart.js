import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css'
import { addIntoCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../Reducer/CartReducer';
import { placeOrder } from '../../Reducer/OrderReducer';
import Navbar from '../../Components/Navbar/Navbar';
import ShopServices from '../../Components/ShopServices/ShopServices';
import Footer from '../../Components/Footer/Footer';
import { toast } from 'react-toastify';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    toast(<p className='m-0'>Product removed from the cart &#128547;</p>, {
      position: "bottom-left",
    })
  }

  const handleDecreaseQuantity = (cartItem) => {
    dispatch(decreaseCart(cartItem));
    toast(<p className='m-0'>Decreased product quantity &#128533;</p>, {
      position: "bottom-left",
    })
  }

  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addIntoCart(cartItem));
    toast(<p className='m-0'>Increased product quantity &#128516;</p>, {
      position: "bottom-left",
    })
  }

  const handleClearCart = () => {
    dispatch(clearCart());
    toast(<p className='m-0'>Cart has been cleared &#128543;</p>, {
      position: "bottom-left",
    })
  }

  const handleOnClick = () => {
    // dispatch(placeOrder());
    dispatch(clearCart());
  }

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem.productId}>
                    <div className="cart-product">
                      <div className='cpimg'><img src={cartItem.productImage} alt={cartItem.productName} /></div>
                      <div className='cpname'>
                        <h3>{cartItem.productName}</h3>
                        <p>{cartItem.productDescription}</p>
                        <button onClick={() =>
                          handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">₹ {cartItem.productPrice}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseQuantity(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseQuantity(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      ₹ {cartItem.productPrice * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">₹ {cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to={'/checkout'}><button onClick={() => handleOnClick()}>Checkout</button></Link>
                <div className="continue-shopping">
                  <Link to="/" className='shhover'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ShopServices />
      <Footer />
    </div>
  )
}

export default Cart