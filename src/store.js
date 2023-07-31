import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductReducer";
import CartReducer from "./Reducer/CartReducer";
import authslice from "./auth/authslice";


export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer,
        auth: authslice.reducer,
    }
})

export const actions = {
    authActions: authslice.actions,
};