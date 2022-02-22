import MyGames from '../User/MyGames';
import Sidebar from '../Sidebar';
import AdminSidebar from './AdminSidebar';

function AdminDashboard () {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <AdminSidebar/>

                </aside>
                <section className="col-md-9">
                    Dashboard
                </section>
            </div>

        </div>
    )
}

export default AdminDashboard;