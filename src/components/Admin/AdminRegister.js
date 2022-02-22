// import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'
function AdminRegister () {

    // const [adminData, setAdminData] = useState(null);
    // setAdminData(){
    //     'fu'
    // }
    useEffect(()=>{
        document.title='AdminRegiseter'
    });
    
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <h4 className="text-center mb-4">Tennis Companion Registeration Form</h4>
                    <div className="card">
                        <h3 className="card-header">Admin Register</h3>
                        <div className="card-body">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="inputFirstName"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="inputLastName"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCountry" className="form-label">Country</label>
                                    <select id="inputCountry" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress"
                                           placeholder="1234 Main St"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2"
                                           placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputMobileNumber" className="form-label">Mobile number</label>
                                    <input type="text" className="form-control" id="inputMobileNumber"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="inputZip"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                {/*<div className="col-md-6">*/}
                                {/*    <label htmlFor="inputGender" className="form-label">Gender</label>*/}
                                {/*    <input type="text" className="form-control" id="inputGender"/>*/}
                                {/*</div>*/}
                                <div className="col-md-4 ">
                                    <label htmlFor="inputMonth" className="form-label ">Month</label>
                                    <select id="inputMonth" className="form-select">
                                        <option hidden>Month...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputDay" className="form-label">Day</label>
                                    <select id="inputDay" className="form-select">
                                        <option hidden selected>Day</option>
                                        <option>...</option>
                                    </select>                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputYear" className="form-label">Year</label>
                                    <select id="inputYear" className="form-select">
                                        <option hidden>Year...</option>
                                        <option>...</option>
                                    </select>                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputSkillLevel" className="form-label">Skill Level</label>
                                    <select id="inputSkillLevel" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputGameType" className="form-label">Game Type</label>
                                    <select id="inputGameType" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputConfirmPassword4" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>    )
}

export default AdminRegister;