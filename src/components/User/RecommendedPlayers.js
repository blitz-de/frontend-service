import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../Sidebar';

function RecommendedPlayers (){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className='card-header'>Recommended players</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                <th>Player name</th>
                                <th>Added at</th>
                                <th>Action</th>
                                </thead>
                                <tbody>
                                <td>Rafael Nadal</td>
                                <td><Link to="/">15.02.2022</Link></td>
                                <td>
                                    <Link to="/"><button className="btn btn-outline-danger btn-sm">
                                        Delete</button></Link>
                                </td>
                                </tbody>
                                <tbody>
                                <td>Roger Dederer</td>
                                <td><Link to="/">15.02.2022</Link></td>
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

export default RecommendedPlayers;