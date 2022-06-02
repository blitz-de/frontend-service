import React , {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Search from '../components/Search';
import AdminSidebar from '../user_management/profile_management/admin/AdminSidebar';
import axios from 'axios';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
const baseUrl = 'http://localhost:8080/reviews/api'
// TODO: Delete the REVIEWS CLASS IF NOT NEEDED
function UserReviewDetails () {

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const {pkid, username} = useParams()

    async function makeRequest() {
        try{
            const response = await  axios.get(baseUrl+'/ratings/'+pkid);
            setTimeout(() => {
                setUsersState(response.data)
            }, 1000);
        } catch (err) {
            if (err.response.status === 404) {

                console.log(err.response.status); // 👉️ 404
            } else if (err.message === "Network Error") {
                setErrorMessage(err.message);
                console.clear();
                alert("🌏 User is supposed to have data to be fetched");
            }
        }
    }
    useEffect(() => {
        makeRequest();
    }, []);

    function renderTableData() {
        try {
            if (getUsersState.pkid == pkid){
                if (getUsersState.pkid != pkid || getErrorMessage==="Network Error") {
                    return (
                        <div>
                            <h1>User doesn't have any rated users</h1>
                        </div>
                    )
                } else {
                    return (
                        <tr>
                            <td> {getUsersState.pkid}
                            </td>
                            <td> {getUsersState.comment}
                            </td>
                            <td>
                                <div style={{color: "orange"}}>
                                    {(getUsersState.rating>=1)?<IoIosStar />:(<IoIosStarOutline />)}
                                    {(getUsersState.rating>=2)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    {(getUsersState.rating>=3)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    {(getUsersState.rating>=4)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    {(getUsersState.rating>=5)?(<IoIosStar />):(<IoIosStarOutline />)}
                                </div>
                            </td>
                        </tr>
                    );
                }
            }
        } catch (error) {
            console.log("here is an error: " + error);
            if (error.response.status === 404) {

                return (<div>
                    <h1>There are no reviews to see</h1>
                </div>)
            }
        }
    }
    return (
        <div>
            <Search />
            <div className="container mt-4">
                <div className="row">
                    <aside className="col-md-3">
                        <AdminSidebar/>

                    </aside>
                    <section className="col-md-9">
                        <div className="card">
                            {/*TODO: make the word user dynamic*/}
                            <h5 className='card-header'>User Reviews</h5>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                    <th>Review ID</th>
                                    <th>Comment</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*(getUserStatus.)*/}
                                    {(getErrorMessage==="Network Error")?
                                        <h1 className='text'>{pkid+" didn't rate anyone " +username}</h1>
                                        :renderTableData()}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>

    );
}

export default UserReviewDetails;