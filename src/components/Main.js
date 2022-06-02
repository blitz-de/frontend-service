import React from 'react'; //, {useState}


// Home,Search, About, Header, Footer
import Home from './Home'
// import Search from "./Search";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

//User
import UserDetail from '../user_management/profile_management/non_admin/UserDetail';
import Login from '../user_management/user_login/Login';
import UserLogout from '../user_management/user_login/UserLogout';

// import RegisterForm from './User/RegisterForm';
import Register from '../user_management/user_register/Register';
import Dashboard from '../user_management/components/Dashboard';
import MyGames from '../user_management/profile_management/non_admin/MyGames';
import MyProfile from '../user_management/profile_management/non_admin/MyProfile';
import FavoritePlayers from '../user_management/user_search_and_category/FavoritePlayers';
import RecommendedPlayers from '../user_management/user_search_and_category/RecommendedPlayers';
import ProfileSettings from '../user_management/profile_management/non_admin/ProfileSettings';
import ChangePassword from '../user_management/profile_management/non_admin/ChangePassword';
import PasswordReset from '../user_management/profile_management/non_admin/PasswordReset';

//Admin
// import AdminLogin from '../user_management/profile_management/admin/AdminLogin';
import AdminLogout from '../user_management/profile_management/admin/AdminLogout';
import AdminRegister from '../user_management/profile_management/admin/AdminRegister';
import AdminDashboard from '../user_management/profile_management/admin/AdminDashboard';
import AdminDetail from '../user_management/profile_management/admin/AdminDetail';
import AdminProfileSettings from '../user_management/profile_management/admin/AdminProfileSettings';
import RegisteredUsers from '../user_management/user_search_and_category/RegisteredUsers';

import UserReviews from '../review_management/Admin/UserReviews';
import Review from '../review_management/Review';
import UserReviewDetails from '../review_management/UserReviewDetails';

// List pages
import LatestUsers from '../user_management/user_search_and_category/LatestUsers';
import PopularUsers from '../user_management/user_search_and_category/PopularUsers';
import NewUsers from '../user_management/user_search_and_category/NewUsers';

import {Routes as Switch, Route} from 'react-router-dom';//Navigate

// PrivateRoute
import PrivateRoute from '../utils/PrivateRoute';
import RequireAuth from './RequireAuth';

function Main() {
    
    return (
        <div className="App">
            <Header/>
            <Switch>
                {/*// User*/}
                <Route path="/" element={<Home />} />
                {/*protected Routes*/}
                {/*<Route element={<RequireAuth />}>*/}
                <Route path="/about" element={<About />} />
                {/*</Route>*/}
                <Route path="/detail/:username" element={<UserDetail />} />
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
                <Route path="/my-profile/:username" element={<MyProfile />} />
                <Route path="/favorite-players" element={<FavoritePlayers />} />
                <Route path="/recommended-players" element={<RecommendedPlayers />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path="/change-password" element={<ChangePassword />} />

                {/*// Admin*/}
                {/*<Route path="/admin-login" element={<AdminLogin />} />*/}
                <Route path="/admin-logout" element={<AdminLogout />} />
                <Route path="/admin-register" element={<AdminRegister />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-detail/:admin_id" element={<AdminDetail />} />
                <Route path="/admin-profile-settings/:admin_id" element={<AdminProfileSettings />} />
                <Route path="/all-registered-users" element={<RegisteredUsers />} />
                {/*TODO: Reviews of user_id*/}
                {/*<Route path={"/user-reviews/"+usernameStatus+'/'} element={<UserReviews />} />*/}
                <Route path={"/user-reviews/:username"}
                       element={<UserReviews />} 
                />

                <Route path="/user-reviews/:username/user-reviews-details/:pkid"
                       element={<UserReviewDetails />}
                />
                <Route path="/user-reviews/:user_id/:review_id" element={<Review />} />
                <Route path="/latest-users" element={<LatestUsers />} />
                <Route path="/popular-users" element={<PopularUsers />} />
                <Route path="/new-users" element={<NewUsers />} />
                <Route path="/accounts/login/" element={<Login />} />

            </Switch>
            {/*<Home />*/}
            <Footer/>
        </div>
    );
}

export default Main;
