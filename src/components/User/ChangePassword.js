import React from 'react';
import MyGames from './MyGames';
import Sidebar from '../Sidebar';

function ChangePassword () {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Change Password</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label htmlFor="firstName" className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" id="firstName"
                                           value=""/>
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

export default ChangePassword;