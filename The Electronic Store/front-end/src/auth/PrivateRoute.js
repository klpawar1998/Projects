import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Privateroute = () => {
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    // return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
    return (
        <>
            <h1>home</h1>
            <p>We will miss you (&#128293;)</p>
            &#128293;
            U+1F525
            U+1F525
        </>
    )
};

export default Privateroute;
