import {Link} from 'react-router-dom';
import Search from '../../components/Search';
import AdminSidebar from '../profile_management/admin/AdminSidebar';
import React , {useEffect, useState} from "react";
// import axios from 'axios';

import authTennisCompanionGetter from '../../utils/AxiosAuthURLGetter';
const baseUrl = 'http://localhost:8080/api';
const endpoint = '/users/api/registered-users/';

function RegisteredUsers() {

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const userAdminStatus = localStorage.getItem('userAdminStatus');


    console.log("im")
    useEffect(()=>{

        if (userLoginStatus == 'true' && userAdminStatus == 'true'){
            authTennisCompanionGetter(endpoint, getUsersState,setUsersState,
                getErrorMessage, setErrorMessage);
        }
    }, []);

    function renderTableData() {
        // return getUsersState.users?.map((user, index)=> {
        return getUsersState.users?.map((user, index) => {
            return (
            <tr key={index}>
                <td>{user.email}
                </td>
                <td key={index}><Link to="/detail/:user_id">
                    {user.date_created}
                </Link></td>
                <td className="col-md-2 ms-auto">
                    <Link to={"/user-reviews/"+user.username}>
                        <button className="btn btn-outline-success btn-sm">
                            Reviews</button></Link>
                    <Link to="/"><button className="btn btn-outline-danger btn-sm float-end">
                        Delete</button></Link>
                </td>
            </tr>
            )
        })
    }

        //   {Country.getAllCountries()
        //       .map((country, index) =>
        //           <option key={index}>{country.name}
        //           </option>
        // )}
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
                            <h5 className='card-header'>Users</h5>
                            <div className="card">
                                <table className="table table-sm table-bordered table-hover">
                                    <thead>
                                    <th>User name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*TODO:*/}
                                    {/*Hide the tab "Users of Tennis Companion when active"*/}
                                    {/*Fetch users according to id here*/}
                                    {/*{renderTableData()}*/}
                                    {renderTableData()}
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

export default RegisteredUsers;