import { Navigate, Outlet } from "react-router-dom";
import React from "react";

export const PrivateRoutes = () => {

    // dummy auth token that will be replaced with real auth token status obtained on successful authentication
    // if auth token is truthy, we want to render the main app by returning the <Outlet/> component
    // otherwise, redirect user back to login screen if they try to access one of the protected routes
    let auth = {'token': true}

    return (
        auth.token ? <Outlet /> : <Navigate to='/login/'/>
    )
}