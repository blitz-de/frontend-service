import React from 'react';

import {Route, Navigate} from 'react-router-dom';
import useAuth from "../components/hooks/useAuth";

export default function PrivateRoute({children}){ // children is a prop (if PrivateRoute initialize anything, it will happen here..
    const auth = useAuth();

    // if the user is not authenticated redirect him/her to the following page
    // if auth==true { run children} else {Navigate to homepage}
    // children: whatever PrivateRoute takes
    return auth ? children: <Navigate to="/" />
}
