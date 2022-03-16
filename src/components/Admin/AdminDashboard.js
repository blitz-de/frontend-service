import React from 'react';
import MyGames from '../User/MyGames';
import Sidebar from '../Sidebar';
import AdminSidebar from './AdminSidebar';
import {Navigate} from 'react-router-dom';
//all-registered-users

function AdminDashboard () {
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const userAdminStatus = localStorage.getItem('userAdminStatus');
    // return auth ? children: <Navigate to="/" />

    return userAdminStatus?
           <>
               <div className="container mt-4">
                   <div className="row">
                       <aside className="col-md-3">
                           <AdminSidebar/>

                       </aside>
                       <section className="col-md-9">
                           Dashboard
                           <h1>Here i should be able to delete users and reviews accordingly</h1>

                       </section>
                   </div>

               </div>
           </>
            : <Navigate to="/user-dashboard"/>
}

export default AdminDashboard;