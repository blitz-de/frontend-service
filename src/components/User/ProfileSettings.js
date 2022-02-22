import MyGames from './MyGames';
import Sidebar from '../Sidebar';

function ProfileSettings () {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>

                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Update Profile</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" id="firstName"
                                           placeholder="Type in your new first name"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" id="lastName"
                                           placeholder="Type in your new last name"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail"
                                           placeholder="Type in your new email"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPhoto" className="col-sm-2 col-form-label">Profile Photo</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="inputPhoto"
                                           placeholder="Type in your new password"/>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword"
                                           placeholder="Type in your new password"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputInterest" className="col-sm-2 col-form-label">Interest</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputInterest"
                                           placeholder=""/>
                                </div>
                            </div>
                            <hr/>
                            <button className="btn btn-success">Update</button>
                        </div>


                    </div>

                </section>
            </div>

        </div>
    )
}

export default ProfileSettings;