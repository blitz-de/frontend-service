import {useNavigate, Navigate, Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import axiosInstance from '../../components/axios';
import { GoogleLogout} from 'react-google-login';
function UserLogout(){

    const userLoginStatus = localStorage.removeItem('userLoginStatus');
    const usernameStatus = localStorage.removeItem('usernameStatus');
    const userAdminStatus = localStorage.removeItem('userAdminStatus');
    const googleLoginStatus = localStorage.removeItem('googleLoginStatus');

    let navigate = useNavigate();

    useEffect(() => {
            axiosInstance.post(`users/api/logout/blacklist/`, {
                
                refresh_token: localStorage.getItem('refresh_token'),
            });

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        window.location.href='/user-login';
        axiosInstance.default.headers['Authorization'] = null;
    });
    
    const onSignoutSuccess = () => {

        axiosInstance.post(`users/api/logout/blacklist/`, {

            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('loginData');
        alert("You've been signed out successfully");
    }
    
    return (
        <div>
            {
                googleLoginStatus ?
                    <div>
                        <GoogleLogout
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSucess={onSignoutSuccess}
                        />
                    </div>
            :
                <h1>Logout</h1>
            }
        </div>
    )
}
export default UserLogout;