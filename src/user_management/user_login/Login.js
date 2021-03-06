import {useNavigate, Navigate, Link} from 'react-router-dom';
import  React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import axiosInstance from '../../components/axios';
// or
import { GoogleLogin } from 'react-google-login';
import {GoogleButton} from '../../utils/GoogleButton';

// import config from '../../config'
const baseUrl = 'http://localhost:8080/users/api/'

function Login () {
    const [getErrorMessage, setErrorMessage] = useState("");
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const userUsernameStatus = localStorage.getItem('usernameStatus');
    const userAdminStatus = localStorage.getItem('userAdminStatus');

    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm();
    //End

    // Submit Form
    const onSubmit = userLoginData => {
        console.log(userLoginData);

        const userFormData = new FormData();
        userFormData.append("email", userLoginData.email)
        userFormData.append("password", userLoginData.password)

        try
        {
            axiosInstance.interceptors.response.use(
                (response) => response,
                (error) => {
                    if (error.response.status === 401) {
                        setErrorMessage(error.response.status); //Output: 401

                    }
                    console.log(error)
                    return Promise.reject(error);
                }
            )
            axios.all([
                axiosInstance.post(`token/`, userFormData),
                axios.post(baseUrl+'login/', userFormData)//user/user-login/

            ])
                .then(axios.spread((response1, response2) => {
                    if (response2.status === 404){
                        console.log(response2, "empty")
                    }
                    // if (error.response2.status === 404){

                    console.log("I am here")
                    console.log(response1.data)
                    localStorage.setItem('access_token', response1.data.access);
                    localStorage.setItem('refresh_token', response1.data.refresh);
                    // Update the axios token, implemented in axios.js
                    axiosInstance.defaults.headers['Authorization'] =
                        'JWT ' + localStorage.getItem('access_token');

                    console.log("jwt ", )
                    // make another request to login? axios.post(baseUrl, userFormData) .then((response) => { if response.data.bool==true)
                    // Navigate to Homepage
                    console.log("authenticated", response2.data.bool)
                    if (response2.data.bool==true){
                        console.log("hi")


                        localStorage.setItem('userLoginStatus', true);
                        console.log("username: ", response2.data.username)
                        localStorage.setItem('usernameStatus', response2.data.username)
                        console.log("fafafa",response2.data.isAdmin)
                        if (response2.data.isAdmin==true){
                            localStorage.setItem('userAdminStatus', true);
                        }
                        else {
                            localStorage.setItem('userAdminStatus', false);
                        }

                        console.log("I am navigation to homepage")
                    }

                    console.log('response1', response1, 'response2', response2)
                    window.location.href='/user-dashboard';
                }));
        } catch (error){
            console.log('this is an error')
            console.log(error);
        }
    }
    // End submit form

    useEffect(()=>{
        document.title='User Login';
    });


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h3 className="card-header">User Login</h3>
                        <div className="card-body">
                            {/*<form>*/}
                            <form  onSubmit={handleSubmit(onSubmit)} className="form">
                                {/*/check if email or password is wrong/*/}

                                {getErrorMessage == '401'
                                    ?
                                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                                        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img"
                                             aria-label="Danger:">
                                            {/*<use xlinkHref="#exclamation-triangle"*/}
                                            {/*/>*/}
                                        </svg>
                                        Incorrect username or password.
                                    </div>
                                    :""}

                                <div className="col-md-8 mx-auto">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input
                                        name='email' type="email"
                                        id="inputEmail4"
                                        {...register("email", {
                                            // required: "Email is Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            }
                                        })}
                                        className={`form-control ${errors.email && "invalid"}`}
                                        onKeyUp={() => {
                                            trigger("email");
                                        }}
                                    />
                                    {errors.email && <small className="text-danger">{errors.email.message}</small>}

                                </div>
                                {/**/}
                                <div className="col-md-8 mb-4 mx-auto">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input
                                        placeholder="Enter your password" type="password"
                                        id="inputPassword4"
                                        name='password'
                                        {...register("password", {
                                            // required: "Password is Required"
                                        })}
                                        className={`form-control ${errors.password && "invalid"}`}
                                        onKeyUp={() => {
                                            trigger("password");
                                        }}/>
                                </div>
                                <div className="d-grid gap-4 mb-4 col-5 mx-auto">
                                    <button type="submit" className="btn btn-primary ">Login</button>
                                    <GoogleButton />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;