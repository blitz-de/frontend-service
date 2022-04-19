import {Link} from 'react-router-dom';
import Search from '../Search';
import AdminSidebar from './AdminSidebar';
import React , {useEffect, useState} from "react";
import axios from 'axios';

const baseUrl = 'http://localhost:8080/api'
function RegisteredUsers() {

    const [getUsersState, setUsersState] = useState("");
    const [getResponseLength, setResponseLength] = useState(0);
    const usernameStatus = localStorage.getItem('usernameStatus');

    console.log("imm")
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/registered-users/').then((response)=>{
                console.log("I am here")
                console.log(response.data);
                // getUsersState = response.data;
                setUsersState(response.data)
                setResponseLength(Object.keys(response.data).length)
                // localStorage.setItem('userLoginStatus', true);

                console.log("gsssafsogh", getUsersState)
            });
        }
        catch (error) {
            console.log("here is an error: " + error);
        }

    }, []);

    function renderTableData() {
        // return getUsersState.users?.map((user, index)=> {
        return Array.from(Array(getResponseLength), (user, index) => {
            return (
            <tr key={index}>
                <td>{getUsersState[index].email}
                </td>
                <td key={index}><Link to="/detail/:user_id">
                    {getUsersState[index].date_created}
                </Link></td>
                <td className="col-md-2 ms-auto">
                    <Link to={"/user-reviews/"+getUsersState[index].username}>
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