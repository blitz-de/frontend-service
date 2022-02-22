import {useParams, Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
function MyProfile(){

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
            <div className="card mt-4 ">
                <div className="card-header">
                    <h5>Profile information</h5>
                </div>
                <div className="container">
                    <div className="row row-cols-2 mt-4">
                        <div className="col">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="float-end">
                                <p className="d-inline">Your Email: bruce@wayne.com</p>
                                <button className="btn btn-sm" style={{color: "#ffffff"}}>
                                    <ion-icon name="create-outline" style={{color: "green"}}></ion-icon>
                                </button>
                                <a href="#">Change</a>
                            </div>
                        </div>
                        <div className="col">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">To activate your Profile, you have to click on the button above</label>
                        </div>

                        <div className="col">
                            <div className="float-end">
                                <label htmlFor="password" className="d-inline">Password: *****</label>
                                <button className="btn btn-sm" style={{color: "#ffffff"}}>
                                    <ion-icon name="create-outline" style={{color: "green"}}></ion-icon>
                                </button>
                                <a href="#">Change</a>
                            </div>
                        </div>
                        <div className="col">

                        </div>
                        <div className="col mb-3 mt-3">
                            <div className="float-end btn-toolbar">
                                <Link to="/profile-settings">
                                    <button type="button" style={{color: "#ffffff",
                                        backgroundColor: "#69801A"}} className="btn-sm me-2">Edit Profile
                                    </button></Link>
                                <button type="button" style={{color: "#ffffff",
                                    backgroundColor: "#1A7280"}} className="btn-sm btn-primary">Become a coach
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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

export default MyProfile;