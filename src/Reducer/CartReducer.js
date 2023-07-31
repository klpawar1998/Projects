import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },

    reducers: {
        addToCart(state, action) {
            const { cartQuantity} = action.payload;
            const itemIndex = state.cartItems.findIndex( (item) => item.productId === action.payload.productId );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += cartQuantity
            } else {
                const tempProduct = { ...action.payload, cartQuantity: cartQuantity};
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        addIntoCart(state, action) {
            const itemIndex = state.cartItems.findIndex( (item) => item.productId === action.payload.productId );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        increaseCart(state, action) {
            const { product, quantity } = action.payload;
        
            const itemIndex = state.cartItems.findIndex((item) => item.productId === product.productId);
        
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += quantity;
            } else {
                const tempProduct = { ...product, cartQuantity: quantity };
                state.cartItems.push(tempProduct);
            }
        
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        

        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.productId === action.payload.productId) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.productId !== cartItem.productId
                    );

                    state.cartItems = nextCartItems;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.productId === action.payload.productId
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.productId !== action.payload.productId
                );

                state.cartItems = nextCartItems;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state;
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { productPrice, cartQuantity } = cartItem;
                    const itemTotal = productPrice * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        

    },
});

export const { addToCart,addIntoCart, removeFromCart, decreaseCart,increaseCart, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer;