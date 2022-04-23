import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { useState } from 'react';
import axiosInstance from 'axios';

export function GoogleButton() {

    const onLoginSuccess = async (res) => {
        console.log("Login Success: ", res.profileObj);
        const body ={token: res.tokenId.trim()}

        try{
            await axiosInstance.post('http://localhost:8080/users/api/google/', body).then((response) =>{
                console.log(response.data)
                localStorage.setItem('googleLoginStatus', true);
                //------------
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);

                // Update the axios token, implemented in axios.js
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');

                //--------
                localStorage.setItem('refresh_token', response.data.refresh_token);//tokens.refresh
                window.location.href='/user-dashboard';
            });
        } catch (error) {
            console.log(error)
        }
    }

    const onFailureSuccess = (result) => {
        console.log("Login Failed: ", result)
        alert(result);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="d-grid gap-4 mb-4 mx-auto">
                        <GoogleLogin
                            disabled={false}
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Log in with Google"
                            onSuccess={onLoginSuccess}
                            onFailure={onFailureSuccess}
                            cookiePolicy={'single_host_origin'}
                        />
                </div>
            </header>
        </div>
    );
}