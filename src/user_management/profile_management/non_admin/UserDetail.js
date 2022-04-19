import React, {useState, useEffect} from 'react';
import {tennisCompanionGetter} from '../../../utils/AxiosURLGetter';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import ButtonMailto from '../../../utils/ButtonMailto';
const baseUrl = 'http://127.0.0.1:8080'

function UserDetail(){

    const {id} = useParams();
    const endpoint = '/users/api/user-details/'+id +'/';
    const userLoginStatus = localStorage.getItem('userLoginStatus');

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");

    async function makeRequest() {
        try{
            const response = await  axios.get(baseUrl+endpoint);
            console.log(response.data);
            // console.log("!!!!!!!!2 ", getUsersState.comment)
            setTimeout(() => {
                setUsersState(response.data)
                console.log("get localStorage info: ", getUsersState)
            }, 1000);
        } catch (err) {
            if (err.response) {
                console.log(err.response.status); // 👉️ 404
            } else if (err.message === "Network Error") {
                setErrorMessage(err.message);
                // console.clear();
                alert("🌏 User is supposed to have data to be fetched");
            }
        }
    }
    useEffect(()=>{
        // if (userLoginStatus == "true"){
        makeRequest()
    }, []);
    return (
        <div className="container mt-3">
            {(userLoginStatus == "true" || userLoginStatus != null) &&
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
                    <div className="card mt-4">
                        <div className="card-header">
                            <h5>Reviews</h5>
                        </div>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item border-0">
                                {/*Username card*/}

                            </li>
                            <li className="list-group-item border-0">Gender:
                                <div className="float-end"><p>We'll send an Email</p></div>
                            </li>
                            <li className="list-group-item border-0">Age:
                                <div className="float-end">

                                    <a href="#"> add to my fav list</a>
                                </div>
                            </li>
                            <li className="list-group-item">Skill Level:</li>
                        </ul>
                    </div>
                </>
            }
            {(userLoginStatus == "false" || userLoginStatus == null) &&
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