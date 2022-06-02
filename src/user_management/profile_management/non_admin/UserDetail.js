import React, {useState, useEffect} from 'react';
import tennisCompanionGetter from '../../../utils/AxiosURLGetter';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import ButtonMailto from '../../../utils/ButtonMailto';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import '../../components/styles/user-detail.css';
const baseUrl = 'http://127.0.0.1:8080'
const reviewUrl = process.env.REACT_APP_REVIEW_URL;
const endpoint = '/users/api/registered-users/';

function UserDetail(){

    const {username} = useParams();
    const endpointUserDetails = '/users/api/user-details/'+username +'/';
    const endpointReviews = '/reviews/api/rated-user/'+username +'/';

    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const googleLoginStatus = localStorage.getItem('googleLoginStatus');

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const [getReviewsState, setReviewsState] = useState("");

    const [getReviewLength, setReviewLength] = useState(0);

    async function makeRequest() {
        try{
            const response = await  axios.get(baseUrl+endpointUserDetails);
            setTimeout(() => {
                setUsersState(response.data)
            }, 1000);
        } catch (err) {
            if (err.response.status === 404) {
                console.log(err.response.status); // 👉️ 404
              alert("Page was not found")
            } else if (err.message === "Network Error") {
                setErrorMessage(err.message);
                console.clear();
                alert("🌏 User is supposed to have data to be fetched");
            }
        }
    }

    async function fetchReviews() {
        try{
            const response = await  axios.get(baseUrl+endpointReviews);
            
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
    useEffect(()=>{
        // if (userLoginStatus == "true"){
        makeRequest();
        fetchReviews();
    }, []);
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
                            <img src={baseUrl + getUsersState.profile_photo} className="img-thumbnail" alt="..."/>

                        </div>
                        <div className="col-8">
                            <h3 className="fw-bold">{getUsersState.username} <p
                                style={{display: "inline", color: "#748A2C"}}>({getUsersState.rating})</p>
                            </h3>
                            <p className="fw-bold">Rating: {getUsersState.rating}</p>
                            <p>{getUsersState.about_me}</p>
                            <p><strong>Active:</strong>{(getUsersState.is_active == "True") ?
                                " " + getUsersState.username + " is available" :
                                getUsersState.username + " is not available"}</p>
                        </div>
                    </div>
                    {/*Profile Information*/}
                    <div className="card mt-4">
                        <div className="card-header">
                            <h5>Profile information</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">Lives
                                in: {getUsersState.city + ", " + getUsersState.country}
                                <div className="btn-toolbar float-end">
                                    <button onClick={() => window.location = 'mailto:' + getUsersState.email + "'"}
                                            type="button" style={{
                                        color: "#ffffff",
                                        backgroundColor: "#69801A"
                                    }} className="btn-sm me-2"
                                    >Contact To Play

                                    </button>
                                    <button type="button" style={{
                                        color: "#ffffff",
                                        backgroundColor: "red"
                                    }} className="btn-sm btn-primary">Block
                                    </button>
                                </div>
                            </li>
                            <li className="list-group-item border-0">Gender:
                                <div className="float-end"><p>We'll send an Email</p></div>
                            </li>
                            <li className="list-group-item border-0">Age: {" " + getUsersState.age}
                                <div className="float-end">
                                    <button className="btn btn-sm" style={{color: "#ffffff"}}>
                                        <i className="bi bi-plus-circle" style={{color: "#69A262"}}></i>
                                    </button>
                                    <a href="#"> add to my fav list</a>
                                </div>
                            </li>
                            <li className="list-group-item">Skill Level: {getUsersState.skill_level}</li>


                        </ul>
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
            {(userLoginStatus !== "true") &&
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

export default UserDetail;