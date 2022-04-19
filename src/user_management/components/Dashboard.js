import React from 'react';
// import MyGames from '../../User_Management/Profile_Management/Not_Admin/MyGames';
import Sidebar from '../../components/Sidebar';

function Dashboard () {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>

                </aside>
                <section className="col-md-9">
                    Dashboard
                </section>
            </div>

        </div>
    )
}

export default Dashboard;