import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import axiosInstance from '../../../components/axios';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import axios from 'axios';
const baseUrl2 = 'http://127.0.0.1:8080'

function MyProfile(){
    const {username} = useParams();
    
    const endpointReviews = '/reviews/api/rated-user/'+username +'/';


    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const userUsernameStatus = localStorage.getItem('usernameStatus');
    
    const googleLoginStatus = localStorage.getItem('googleLoginStatus');


    // localStorage.setItem('userLoginStatus', true);
    // console.log("username: ", response2.data.username)
    // localStorage.setItem('usernameStatus', response2.data.username)
    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const [getReviewsState, setReviewsState] = useState("");
    const [getReviewLength, setReviewLength] = useState(0);

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const endpoint = '/my-profile/';
    let {user_id} =useParams();

    async function makeRequest() {
        try{
            const response = await  axiosInstance.get(baseUrl+endpoint);
            console.log(response.data);
            setTimeout(() => {
                if (googleLoginStatus === 'true'){
                    // google stuff

                    setUsersState(response.data);
                    console.log('#### google ', getUsersState)
                } else if (userLoginStatus === 'true'){
                    // private email stuff
                    setUsersState(response.data);
                    console.log("get localStorage info: ", getUsersState)
                }
    
            }, 1000);
        } catch (err) {
            if (err.response.status === 401) {
                alert("You've to sign in to see your profile")
                console.log(err.response.status); // 👉️ 404
            } else if (err.message === "Network Error") {
                setErrorMessage(err.message);
                // console.clear();
                alert("🌏 User is supposed to have data to be fetched");
            }
        }
    }
    useEffect(()=>{
        makeRequest();
        fetchReviews();
    }, []);

    async function fetchReviews() {
        try{
            const response = await  axios.get(baseUrl2+endpointReviews);

            setTimeout(() => {
                setReviewsState(response.data)
                setReviewLength(response.data['users'].length)
            }, 1000);
        } catch (err) {
            if (err.response.status === 404) {
                console.log(err.response.status); // 👉️ 404
                // alert("Page was not found")
            } else if (err.message === "Network Error") {
                setErrorMessage(err.message);
                console.clear();
                alert("🌏 User is supposed to have data to be fetched");
            }
        }
    }

    const mystyle = {
        display: "inline-block",
        justifyContent: "bottom",
        height: "100%", width: "100%",
        minHeight: "1px",
    };


    function allReviews(){

        return getReviewsState.users?.map((user, index) => {

            return (
                <div key={index} className="_1v365y9">
                    <div className="_1v8nkzp">
                        <div className="_gkkj7s">
                            <div className="_4gelgl">
                                <div className="_kb5pe">
                                    <span tabIndex="-1">{"created in: "+(user.created_at).substring(0, 10)}</span>
                                </div>
                            </div>
                            <div className="_pog3hg">
                            </div>
                        </div>
                        <div>
                              <span>{user.comment}
                              </span>
                        </div>

                    </div>
                    <div className="_klarpw">
                        <div className="_djrljn">
                            <div className="_1009fyxt"><Link to="/user-login"
                                                             className="_9bezani">
                                <div className="_1i1lh00h">
                                    <div className="_1h6n1zu"

                                         style={mystyle}>

                                        <div className="_15p4g025">
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="_g01008">{user.rater}
                                <div style={{color: "orange"}}>
                                    {(user.rating>=1)?<IoIosStar />:(<IoIosStarOutline />)}
                                    {(user.rating>=2)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    {(user.rating>=3)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    {(user.rating>=4)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    {(user.rating>=5)?(<IoIosStar />):(<IoIosStarOutline />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="container mt-3">
            {(userLoginStatus == "true" || userLoginStatus != null ||
                    googleLoginStatus === 'true') &&
                <>
                    <div className="row">

                        <div className="col-4">
                            <img src="/logo512.png" className="img-thumbnail" alt="..."/>

                        </div>
                        <div className="col-8">

                            <h3 className="fw-bold">{getUsersState.full_name}<p
                                style={{display: "inline", color: "#748A2C"}}>(2.6)</p>
                            </h3>
                            <p className="fw-bold">Rating: {getUsersState.rating}</p>
                            <p>{getUsersState.about_me}</p>
                            <p><strong>Active:</strong>{(getUsersState.is_active == "True") ?
                                " " + getUsersState.username + " is available" :
                                getUsersState.username + " is not available"}</p>

                        </div>
                    </div>
                    {/*Profile Information*/}
                    <div className="card mt-4 ">
                        <div className="card-header">
                            <h5>Profile information</h5>
                        </div>
                        <div className="container">
                            <div className="row row-cols-2 mt-4">
                                <div className="col">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexSwitchCheckDefault"/>

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="float-end">
                                        <p className="d-inline">Your Email: bruce@wayne.com</p>
                                        <button className="btn btn-sm" style={{color: "#ffffff"}}>
                                            <ion-icon name="create-outline" style={{color: "green"}}></ion-icon>
                                        </button>
                                        <a href="#">Change</a>
                                    </div>
                                </div>
                                <div className="col">
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">To activate
                                        your Profile, you have to click on the button above</label>
                                </div>

                                <div className="col">
                                    <div className="float-end">
                                        <label htmlFor="password" className="d-inline">Password: *****</label>
                                        <button className="btn btn-sm" style={{color: "#ffffff"}}>
                                            <ion-icon name="create-outline" style={{color: "green"}}></ion-icon>
                                        </button>
                                        <a href="#">Change</a>
                                    </div>
                                </div>
                                <div className="col">

                                </div>
                                <div className="col mb-3 mt-3">
                                    <div className="float-end btn-toolbar">
                                        <Link to="/profile-settings">
                                            <button type="button" style={{
                                                color: "#ffffff",
                                                backgroundColor: "#69801A"
                                            }} className="btn-sm me-2">Edit Profile
                                            </button>
                                        </Link>
                                        <button type="button" style={{
                                            color: "#ffffff",
                                            backgroundColor: "#1A7280"
                                        }} className="btn-sm btn-primary">Become a coach
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*Reviews*/}
                    <div className="card mt-4 ">
                        <div className="card-header ">
                            <h5>
                                <IoIosStar style={{color: "orange"}}/>
                                {" " +getUsersState.rating +" " + getReviewLength + " " +"Reviews"}
                            </h5>
                        </div>
                        <div className="row">
                            {allReviews()}
                        </div>


                    </div>
                </>
            }
            {(userLoginStatus === "false"  ||
                googleLoginStatus=== "false" ) &&
                <>
                    <div className="d-grid gap-3">
                        <div className="p-2 bg-light border">
                            <h1>You have to sign in to see {getUsersState.username+"'s"} information.{" "}
                                <Link to="/user-login">Sign in</Link>
                            </h1>

                        </div>
                        <div className="p-2 bg-light border">
                            <h1>or Register if you don't have an account: {" "}
                                <Link to="/user-register">Register</Link>
                            </h1>
                        </div>
                    </div>
                </>
            }
        </div>

    );
}

export default MyProfile;