import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../Sidebar';

function MyGames (){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>

                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className='card-header'>My Games</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                <th>Game name</th>
                                <th>Created by</th>
                                <th>Action</th>
                                </thead>
                                <tbody>
                                <td>Tennis Game</td>
                                <td><Link to="/detail/:user_id">User played with</Link></td>
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

    )
}

export default MyGames;