import React from 'react';
import {useParams} from 'react-router-dom';
function UserDetail(){

    let {user_id} =useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="..." />

                </div>
                <div className="col-8">
                    <h3 className="fw-bold">Users Name <p style={{display: "inline",color: "#748A2C"}}>(2.6)</p>
                    </h3>
                    <p className="fw-bold">Rating: 4.3</p>
                    <p>here you can write the description of the user.</p>
                    <p><strong>Last online:</strong> here comes a date variable from the backend</p>
                </div>
            </div>
            {/*Profile Information*/}
            <div className="card mt-4">
                <div className="card-header">
                    <h5>Profile information</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0">Lives in:
                        <div className="btn-toolbar float-end">
                            <button type="button" style={{color: "#ffffff",
                                backgroundColor: "#69801A"}} className="btn-sm me-2">Contact To Play
                            </button>
                            <button type="button" style={{color: "#ffffff",
                                backgroundColor: "red"}} className="btn-sm btn-primary">Block
                            </button>
                        </div>
                    </li>
                    <li className="list-group-item border-0">Gender:
                        <div className="float-end"><p>We'll send an Email</p></div>
                    </li>
                    <li className="list-group-item border-0">Age:
                        <div className="float-end">
                            <button className="btn btn-sm" style={{color: "#ffffff"}}>
                                <i className="bi bi-plus-circle" style={{color: "#69A262"}}></i>
                            </button>
                            <a href="#"> add to my fav list</a>
                        </div>
                    </li>
                    <li className="list-group-item">Skill Level: </li>


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
                    <li className="list-group-item">Skill Level: </li>


                </ul>
            </div>
        </div>

    );
}

export default UserDetail;