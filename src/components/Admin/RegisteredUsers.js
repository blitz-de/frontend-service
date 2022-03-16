import {Link} from 'react-router-dom';
import Search from '../Search';
import AdminSidebar from './AdminSidebar';
import React , {useEffect, useState} from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8002/api/user'
function RegisteredUsers() {

    const [getUsersState, setUsersState] = useState("");
    console.log("imm")
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/all-registered-users/').then((response)=>{
                console.log(response.data);
                // getUsersState = response.data;
                setUsersState(response.data)
                console.log("gafafogh", getUsersState)
            });
        }
        catch (error) {
            console.log("here is an error: " + error);
        }

    }, []);

    function renderTableData() {
        return getUsersState.users?.map((user, index)=> {
            return (
            <tr key={index}>
                <td>{user}
                </td>
                <td key={index}><Link to="/detail/:user_id">
                    {getUsersState.date_created[index]}
                </Link></td>
                <td className="col-md-2 ms-auto">
                    <Link to="/user-reviews/:user_id">
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