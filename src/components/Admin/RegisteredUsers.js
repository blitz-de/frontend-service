import {Link} from 'react-router-dom';
import Search from '../Search';
import AdminSidebar from './AdminSidebar';

function RegisteredUsers() {
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
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                    <th>User name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {/*TODO:*/}
                                    {/*Hide the tab "Users of Tennis Companion when active"*/}
                                    {/*Fetch users according to id here*/}
                                    <td>User1</td>
                                    <td><Link to="/detail/:user_id">User played with</Link></td>
                                    <td>
                                        <Link to="/user-reviews/:user_id"><button className="btn btn-outline-success btn-sm">
                                            Reviews</button></Link>
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
        </div>
        );
}

export default RegisteredUsers;