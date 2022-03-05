import React from 'react';


// Home,Search, About, Header, Footer
import Home from './Home'
import Search from "./Search";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

//User
import UserDetail from './User/UserDetail';
import Login from './User/Login';
import UserLogout from './User/UserLogout';

// import RegisterForm from './User/RegisterForm';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyGames from './User/MyGames';
import MyProfile from './User/MyProfile';
import FavoritePlayers from './User/FavoritePlayers';
import RecommendedPlayers from './User/RecommendedPlayers';
import ProfileSettings from './User/ProfileSettings';
import ChangePassword from './User/ChangePassword';


//Admin
import AdminLogin from './Admin/AdminLogin';
import AdminLogout from './Admin/AdminLogout';
import AdminRegister from './Admin/AdminRegister';
import AdminDashboard from './Admin/AdminDashboard';
import AdminDetail from './Admin/AdminDetail';
import AdminProfileSettings from './Admin/AdminProfileSettings';
import RegisteredUsers from './Admin/RegisteredUsers';
import UserReviews from './Admin/UserReviews';
import Review from './User/Review';

// List pages
import AllUsers from './User/AllUsers';
import LatestUsers from './User/LatestUsers';
import PopularUsers from './User/PopularUsers';
import NewUsers from './User/NewUsers';

import {Routes as Switch, Route, Navigate} from 'react-router-dom';

// PrivateRoute
import PrivateRoute from './utils/PrivateRoute';
import RequireAuth from './RequireAuth';

function Main() {

    return (
        <div className="App">
            <Header/>
            <Switch>
                {/*// User*/}
                <Route path="/" element={<Home />} />
                {/*protected Routes*/}
                <Route element={<RequireAuth />}>
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/detail/:user_id" element={<UserDetail />} />
                <Route path="/user-login" element={<Login />} />
                <Route path="/user-logout" element={<UserLogout />} />
                <Route path="/user-register" element={<Register />} />
                {/*Private Routes*/}
                <Route path="/user-dashboard" element={
                    <PrivateRoute>
                        {/*if useAuth==true redirect us to Dashboard*/}
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/my-games" element={<MyGames />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/favorite-players" element={<FavoritePlayers />} />
                <Route path="/recommended-players" element={<RecommendedPlayers />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path="/change-password" element={<ChangePassword />} />

                {/*// Admin*/}
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-logout" element={<AdminLogout />} />
                <Route path="/admin-register" element={<AdminRegister />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-detail/:admin_id" element={<AdminDetail />} />
                <Route path="/admin-profile-settings/:admin_id" element={<AdminProfileSettings />} />
                <Route path="/all-registered-users" element={<RegisteredUsers />} />
                {/*TODO: Reviews of user_id*/}
                <Route path="/user-reviews/:user_id" element={<UserReviews />} />
                <Route path="/user-reviews/:user_id/:review_id" element={<Review />} />

                <Route path="/all-users" element={<AllUsers />} />
                <Route path="/latest-users" element={<LatestUsers />} />
                <Route path="/popular-users" element={<PopularUsers />} />
                <Route path="/new-users" element={<NewUsers />} />

            </Switch>
            {/*<Home />*/}
            <Footer/>
        </div>
    );
}

export default Main;
