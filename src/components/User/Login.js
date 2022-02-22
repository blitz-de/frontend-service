 // import {Link} from 'react-router-dom';
 import React, {useEffect, useState, useMemo} from 'react';
 import axios from 'axios';
 const baseUrl = 'http://127.0.0.1:8000/api'
function Login () {

    const [userLoginData, setUserLoginData] = useState({
        email:'',
        password:'',
    });

    // Change Element value
    const handleChange=(event)=>{
        setUserLoginData({
            ...userLoginData,
            [event.target.name]:event.target.value
        });
    }
    useEffect(()=>{
        document.title='User Login';
    });
    //End
    // Submit Form

    const submitForm=()=>{
        console.log(userLoginData);

        const userFormData = new FormData();
        userFormData.append("email", userLoginData.email)
        userFormData.append("password", userLoginData.password)

        try{
            axios.post(baseUrl+'/user-login', userFormData).then((response)=>{
                console.log(response.data)
            });
        } catch (error){
            console.log(error);
        }


    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h3 className="card-header">User Login</h3>
                        <div className="card-body">
                            {/*<form>*/}
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email"
                                           value={userLoginData.email} name='email'
                                           onChange={handleChange} className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with
                                            anyone else.
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password"
                                           value={userLoginData.password} name='password'
                                           onChange={handleChange}
                                           className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                            {/*</form>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;