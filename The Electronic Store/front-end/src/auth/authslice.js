import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const USER_JWT_TOKEN = "user-jwt-token";
const storedToken = JSON.parse(localStorage.getItem(USER_JWT_TOKEN));

const initialState = {
    isLoggedIn: Boolean(storedToken),
    token: storedToken,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user.userName;
            toast.success(<p className="m-0">Welcome {action.payload.user.userName} <br />to<br /> The Electronic Store &#128154;</p>, {
                position: "bottom-left", className: "text-center",
            });
            localStorage.setItem(
                USER_JWT_TOKEN,
                JSON.stringify(action.payload.token)
            );
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
            localStorage.removeItem(USER_JWT_TOKEN);
            toast(<p className='m-0'>We will miss you &#128532;</p>, {
                position: "bottom-left",
            });
        },
    },
});

export default authSlice

