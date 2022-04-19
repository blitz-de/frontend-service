import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import tennisCompanionGetter from '../../utils/AxiosURLGetter';
import {fetchUsers} from '../../utils/UserFetcher';
const baseUrl = 'http://127.0.0.1:8080'
const endpoint = '/users/api/latest-players/';

function LatestUsers () {

    const [getUsersState, setUsersState] = useState("");
    // const [getResponseLength, setResponseLength] = useState(0);
    const [getErrorMessage, setErrorMessage] = useState("");
    // const [user_idState, setUser_idState] = useState(0);
    // console.log("imm")
    useEffect(()=>{
        console.log("im latest")
        tennisCompanionGetter(endpoint, getUsersState,setUsersState,
            getErrorMessage, setErrorMessage);

        // setUser_idState()
    }, []);

    return(

        <div className="container mb-4">
            {/*start latest courses*/}
            <h3 className="pb-2 mb-4 mt-5">
                <Link to="latest-users" className="text-decoration-none float-end link-success">
                    See All
                </Link>
                Latest Tennis players</h3>
            <div className="row">
                {/*{renderProfileData()}*/}
                {fetchUsers(getUsersState, baseUrl)}
                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <Link to="/detail/1"><img src="/images/logo192.png" className="card-img-top" alt="Logo" /></Link>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><Link to="/detail/1">Tennis Game</Link></h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><a href="#">Football</a></h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><a href="#">Basketball</a></h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            {/*End latest users*/}
            {/*Start of paginaation*/}
            {/*<nav aria-label="Page navigation example">*/}
            {/*    <ul className="pagination justify-content-center mt-5 pagination-lg">*/}
            {/*        <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>*/}
            {/*        <li className="page-item"><Link className="page-link" to="#">1</Link></li>*/}
            {/*        <li className="page-item"><Link className="page-link" to="#">2</Link></li>*/}
            {/*        <li className="page-item"><Link className="page-link" to="#">3</Link></li>*/}
            {/*        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            {/*End of pagination*/}
        </div>
    );
}

export default LatestUsers;