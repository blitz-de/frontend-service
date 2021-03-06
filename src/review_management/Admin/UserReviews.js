import React , {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Search from '../../components/Search';
import AdminSidebar from '../../user_management/profile_management/admin/AdminSidebar';
import axios from 'axios';

const baseUrl = 'http://localhost:8080/reviews/api'
// TODO: Delete the REVIEWS CLASS IF NOT NEEDED
function UserReviews () {

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const {username} = useParams()

    async function makeRequest() {
        try{
            const response = await  axios.get(baseUrl+'/users-ratings/'+username+'/');
            setTimeout(() => {
                setUsersState(response.data)
            }, 1000);
        } catch (err) {
            if (err.response) {
                setErrorMessage(err.response);
                console.clear()
            } else if (err.message === "Network Error") {
                console.log("FW ", err.message)
                setErrorMessage(err.message);
                console.clear();
                alert("🌏 There is problem with connection to the network");
            }
        }
    }
    useEffect(() => {
        makeRequest();
    }, []);

    function renderTableData() {
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
                                <td ><Link to="/detail/:user_id">
                                    {user.rated_user}
                                </Link></td>
                                <td ><Link to="/detail/:user_id">
                                    {user.created_at}
                                </Link></td>
                                <td className="col-md-2 ms-auto">
                                    <Link to={"user-reviews-details/"+user.pkid}>
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
            if (getErrorMessage.status === 404) {
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
                                    <th>Review ID {username}</th>
                                    <th>User Reviewed</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*(getUserStatus.)*/}
                                    {(getErrorMessage==="Network Error")?
                                        <h1 className='text'>{username+" didn't rate anyone"}</h1>
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

export default UserReviews;