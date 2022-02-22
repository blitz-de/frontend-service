import {Link} from 'react-router-dom';
import MyProfile from './User/MyProfile';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#E8EBDA"}} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Tennis Companion</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="my-profile">My Profile</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>

                        {/*....*/}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/admin-login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/admin-register">Register</Link></li>
                                <li><Link className="dropdown-item" to="/admin-detail/:admin_id">Profile</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/admin-dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/admin-logout">Logout</Link></li>
                                <li className="dropdown-item">
                                    <Link className="nav-link" to="/admin-profile-settings/:admin_id">
                                        <i className="bi bi-gear-fill"></i>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/*....*/}

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user/user-login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/user/user-register">Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                                <li className="dropdown-item">
                                    <Link className="nav-link" to="/profile-settings">
                                        <i className="bi bi-gear-fill"></i>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/*<li className="nav-item-dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                        {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                        {/*        User*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu" aria-labelledby="navbarNavDropdown">*/}

                        {/*    </ul>                 <li><Link className="dropdown-item" to="/user/user-login">Login</Link></li>*/}
                        {/*    <li><Link className="dropdown-item" to="/user/user-register">Register</Link></li>*/}
                        {/*    <li><hr className="dropdown-divider" /></li>*/}
                        {/*    <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>*/}
                        {/*    <li><a className="dropdown-item" href="#">Logout</a></li>*/}
                        {/*</li>*/}


                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;
