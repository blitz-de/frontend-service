import {Link} from 'react-router-dom';

function AdminSidebar() {
    return(
        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">
                <Link to="/admin-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to="/all-registered-users" className="list-group-item list-group-item-action">Users of Tennis Companion</Link>
                {/*<Link to="/my-games" className="list-group-item list-group-item-action">Reviews of Tennis Companion</Link>*/}
                <Link to="/change-password" className="list-group-item list-group-item-action">Change password</Link>
                <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>

    )
}

export default AdminSidebar;