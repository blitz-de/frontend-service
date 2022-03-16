import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search';
import AdminSidebar from './AdminSidebar';

// TODO: Delete the REVIEWS CLASS IF NOT NEEDED
function UserReviews () {
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
                                    <th>User Reviewed</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*TODO:*/}
                                    {/*Hide the tab "Users of Tennis Companion when active"*/}
                                    {/*Fetch reviews according to id here*/}
                                    <td><Link to="/user-reviews/:user_id/:review_id">Review1</Link></td>
                                    {/*TODO: Fetch users according to id from backened*/}
                                    <td><Link to="/detail/:user_id">User1</Link></td>
                                    {/*TODO: fetch the review creation date from the backend*/}
                                    <td><Link to="/date">Date</Link></td>
                                    <td>
                                        <Link to="/"><button className="btn btn-outline-danger btn-sm">
                                            Delete</button></Link>
                                    </td>

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