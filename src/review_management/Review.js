import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Search from '../components/Search';
import AdminSidebar from '../user_management/profile_management/admin/AdminSidebar';


function Review() {

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
                            <h5 className='card-header'>Review</h5>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                    <th>Content</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*TODO:*/}
                                    {/*Hide the tab "Users of Tennis Companion when active"*/}
                                    {/*Fetch users according to id here*/}
                                    <td>This is the review content</td>
                                    {/*TODO: fetch the review creation date from the backend*/}
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

export default Review;