import {useNavigate, Navigate, Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import axiosInstance from '../../components/axios';

function UserLogout(){

    console.log("i am here")
    const userLoginStatus = localStorage.removeItem('userLoginStatus');
    const usernameStatus = localStorage.removeItem('usernameStatus');
    const userAdminStatus = localStorage.removeItem('userAdminStatus');

    let navigate = useNavigate();

    useEffect(() => {

        axiosInstance.post(`users/api/logout/blacklist/`, {
                refresh_token: localStorage.getItem('refresh_token'),
        });
        // localStorage.removeItem('userLoginStatus')
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href='/user-login';
        axiosInstance.default.headers['Authorization'] = null;
    });
    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}
export default UserLogout;