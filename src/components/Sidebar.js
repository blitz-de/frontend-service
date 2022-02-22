import {Link} from 'react-router-dom';

function Sidebar() {
    return(
        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">
                <Link to="/user-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to="/my-profile" className="list-group-item list-group-item-action">My profile</Link>
                <Link to="/my-games" className="list-group-item list-group-item-action">Game history</Link>
                <Link to="/favorite-players" className="list-group-item list-group-item-action">Favorite players</Link>
                <Link to="/recommended-players" className="list-group-item list-group-item-action">Recommended players</Link>
                <Link to="/change-password" className="list-group-item list-group-item-action">Change password</Link>
                <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>

    )
}

export default Sidebar;