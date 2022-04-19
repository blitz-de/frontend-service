// import {Link} from 'react-router-dom';
import {useNavigate, Navigate, Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import {useForm} from 'react-hook-form';
import axiosInstance from '../axios';
const baseUrl = 'http://127.0.0.1:8002/api/'

function AdminLogin () {

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
            axios.all([
                axiosInstance.post(`token/`, userFormData),
                axios.post(baseUrl+'user/user-login/', userFormData)
            ])
                .then(axios.spread((response1, response2) => {
                    console.log("I am here")
                    localStorage.setItem('access_token', response1.data.access);
                    localStorage.setItem('refresh_token', response1.data.refresh);
                    // Update the axios token, implemented in axios.js
                    axiosInstance.defaults.headers['Authorization'] =
                        'JWT ' + localStorage.getItem('access_token');

                    if(response2.data.bool==true){
                        // navigate('/user-dashboard')
                        window.location.href='/user-dashboard';
                        localStorage.setItem('userLoginStatus', true);
                        if (response2.data.isAdmin==true){
                            localStorage.setItem('userAdminStatus', true);
                        }

                        console.log("I am navigation to homepage")
                    }

                    console.log('response1', response1, 'response2', response2)
                }));
        } catch (error){
            console.log('this is an error')
            console.log(error);
        }
    }
    // End submit form
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const userAdminStatus = localStorage.getItem('userAdminStatus');

    useEffect(()=>{
        document.title='AdminRegiseter'
    });
    
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h3 className="card-header">Admin Login</h3>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           {...register("email", {
                                               required: "Email is Required",
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
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           {...register("password", {required: "Password is Required"})}
                                           className={`form-control ${errors.password && "invalid"}`}
                                           onKeyUp={() => {
                                               trigger("password");
                                           }}/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminLogin;