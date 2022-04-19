import React , {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Search from '../../../components/Search';

import axios from 'axios';

const baseUrl = 'http://localhost:8080/reviews/api'
// TODO: Delete the REVIEWS CLASS IF NOT NEEDED
function PasswordReset () {

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const {username} = useParams()

    useEffect(() => {
    }, []);


    return (
        <div>
            <Search />
            <div className="container mt-4">
                <div className="row">
                    <aside className="col-md-3">

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
                                    Your password has been reset
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

export default PasswordReset;