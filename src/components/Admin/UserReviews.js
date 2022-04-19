import React , {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Search from '../Search';
import AdminSidebar from './AdminSidebar';
import axios from 'axios';

const baseUrl = 'http://localhost:8080/reviews/api'
// TODO: Delete the REVIEWS CLASS IF NOT NEEDED
function UserReviews () {
    const [getUsersState, setUsersState] = useState("");
    // const [getResponseLength, setResponseLength] = useState(0);
    const usernameStatus = localStorage.getItem('usernameStatus');
    const [getSingleUserStatus, setSingleUserStatus] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const {username} = useParams()
    console.log("imm")
    async function makeRequest() {
        try{
            const response = await  axios.get(baseUrl+'/v1/ratings/users-ratings/'+username+'/');
             console.log("EEEE ", response)
            // .then((response)=>{
            console.log("I am here")
            // console.log("erorrrrrrrrrrr ", response.data)
            console.log(response.data);
            // getUsersState = response.data;
            //console.log("the user] state: ", Object.keys(response.data).length)
            setTimeout(() => {
                setUsersState(response.data)
                // setResponseLength(Object.keys(response.data).length)
                console.log("get localStorage info: ", localStorage.getItem('userAdminStatus'))
                // console.log("@@@@@@@@@@@@@@@@@@@ ", getUsersState.users[0].rater)
                // console.log("gsssafsogh", getUsersState)
                // console.log("Data length: ", getResponseLength).
            }, 1000);
        } catch (err) {
            if (err.response) {
                // ✅ log status code here
                console.log(err.response.status); // 👉️ 404
                console.log(err.response.statusText); // 👉️ Not Found
                console.log(err.message); // 👉️ Request failed with status code 404
                console.log(err.response.headers); // 👉️ {... response headers here}
                console.log(err.response.data); // 👉️ {... response data here}
            } else if (err.message === "Network Error") {
                {console.log("FA ", err.message)}
                setErrorMessage(err.message)
            }
        }
    }
    useEffect(() => {
        makeRequest();
    }, []);

    // (getUsersState[index].rater=={username} ? ... : "something went wrong"
    function renderTableData() {
        // return Array.from(Array(getResponseLength), (user, index) => {
        try {
            if (getUsersState.users.filter(i => i.rater === username))
                return getUsersState.users?.map((user, index) => {
                    if (user.rater != username || getErrorMessage==="Network Error") {
                        return (
                            <div>
                                <h1>User doesn't have any rated users</h1>
                            </div>
                        )
                    } else {
                        return (
                            <tr key={index}>
                                <td> {user.rater}
                                </td>
                                <td key={index}><Link to="/detail/:user_id">
                                    {user.rated_user}
                                </Link></td>
                                <td key={index}><Link to="/detail/:user_id">
                                    {user.created_at}
                                </Link></td>
                                <td className="col-md-2 ms-auto">
                                    <Link to="/user-reviews/:user_id">
                                        <button className="btn btn-outline-success btn-sm">
                                            Reviews
                                        </button>
                                    </Link>
                                    <Link to="/">
                                        <button className="btn btn-outline-danger btn-sm float-end">
                                            Delete
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    }
                })
        } catch (error){
            console.log("here is an error: " + error);
            return(<div>
                <h1>...Loading</h1>
            </div>)
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
                                    <th>Review ID {username}</th>
                                    <th>User Reviewed</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*(getUserStatus.)*/}
                                    {(getErrorMessage==="Network Error")?
                                        <h1 className='text-danger'>{username +" doesn't have rated users"}</h1>
                                        :renderTableData()}
                                    {/*{renderTableData()}*/}
                                    {/*TODO:*/}
                                    {/*Hide the tab "Users of Tennis Companion when active"*/}
                                    {/*Fetch reviews according to id here*/}
                                    {/*<td><Link to="/user-reviews/:user_id/:review_id">Review1</Link></td>*/}
                                    {/*/!*TODO: Fetch users according to id from backened*!/*/}
                                    {/*<td><Link to="/detail/:user_id">User1</Link></td>*/}
                                    {/*/!*TODO: fetch the review creation date from the backend*!/*/}
                                    {/*<td><Link to="/date">Date</Link></td>*/}
                                    {/*<td>*/}
                                    {/*    <Link to="/"><button className="btn btn-outline-danger btn-sm">*/}
                                    {/*        Delete</button></Link>*/}
                                    {/*</td>*/}

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

export default UserReviews;