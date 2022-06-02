import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import MyProfile from '../User_Management/Profile_Management/Not_Admin/MyProfile';
import axiosInstance from './axios'
import { GoogleLogout} from 'react-google-login';

function Header() {
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const googleLoginStatus = localStorage.getItem('googleLoginStatus');
    const userAdminStatus = localStorage.getItem('userAdminStatus');

    // if logged == true, if not == null
    const [getGoogleLoginStatus, setGoogleLoginStatus] = useState("false");


    const onSignoutSuccess = () => {

        axiosInstance.post(`/logout/blacklist/`, {

            refresh_token: localStorage.getItem('refresh_token'),
        });
        //
        setGoogleLoginStatus("false");
        localStorage.removeItem('loginData');
        localStorage.removeItem('googleLoginStatus');
        localStorage.removeItem('userLoginStatus');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        // alert("You've been signed out successfully");
        window.location.href = 'user-login';

    }
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
                        {/*!= previou*/}
                        {userAdminStatus !== 'true' &&
                            <>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                        User
                                    </Link>
                                    {/*if it's true show specific fields*/}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/*if userLoginStatus == false previous !=-> show Login and Register*/}
                                        {((userLoginStatus !== 'true' || googleLoginStatus !== 'true')&&
                                                (googleLoginStatus ==='false' || userLoginStatus ===null)) &&
                                            <>
                                                <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                                                <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                                            </>
                                        }
                                        <li><hr className="dropdown-divider" /></li>
                                        {/*if userLoginStatus == true -> show Dashboard and Logout*/}
                                        {/*if userLoginStatus == true previous ==-> show Dashboard and Logout*/}
                                        {(userLoginStatus === 'true'|| googleLoginStatus ==='true')&&
                                            <>
                                                <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                                                { (userLoginStatus === 'true' && (googleLoginStatus==='false' || googleLoginStatus ===null))?
                                                    <li><Link className="dropdown-item" to="/user-logout">Logout</Link>
                                                    </li>:
                                                    (googleLoginStatus === 'true' && userLoginStatus === 'true') &&
                                                    <GoogleLogout
                                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                                        buttonText="Logout"
                                                        onLogoutSuccess={onSignoutSuccess}
                                                    >
                                                    </GoogleLogout>
                                                }
                                                <li className="dropdown-item">
                                                    <Link className="nav-link" to="/profile-settings">
                                                        <i className="bi bi-gear-fill"></i>
                                                    </Link>
                                                </li>
                                            </>
                                        }

                                    </ul>
                                </li>
                            </>
                        }

                        {/*toDO: change != to == once done previous ==*/}
                        {userAdminStatus === 'true' &&
                            <>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {((userLoginStatus !== 'true' || googleLoginStatus !== 'true') &&
                                                (googleLoginStatus === 'false')) &&
                                            <>
                                                <li><Link className="dropdown-item" to="/admin-login">Login</Link></li>
                                                <li><Link className="dropdown-item" to="/admin-register">Register</Link>
                                                </li>
                                            </>
                                        }
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
                            </>

                        }


                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {userLoginStatus === 'true' || googleLoginStatus ==='true' &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="my-profile">My Profile</Link>
                                </li>
                            </>
                        }

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;
