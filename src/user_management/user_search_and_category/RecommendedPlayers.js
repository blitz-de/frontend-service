import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
// import axiosInstance from '../../components/axios'
import authTennisCompanionGetter from '../../utils/AxiosAuthURLGetter';
import {fetchUsers} from '../../utils/UserFetcher';

const baseUrl = 'http://127.0.0.1:8080'
const endpoint = '/users/api/recommended-players/';
function RecommendedPlayers () {
    
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const [getErrorMessage, setErrorMessage] = useState("");

    const [getUsersState, setUsersState] = useState("");
    // const [getResponseLength, setResponseLength] = useState(0);

    useEffect(() => {
        if (userLoginStatus == 'true'){
            authTennisCompanionGetter(endpoint, getUsersState,setUsersState,
                getErrorMessage, setErrorMessage);
        }
    }, []);

    return(
        <div className="container mb-4">
            {userLoginStatus == 'true' &&
                <>
                    {/*start Recommended Players*/}
                    <h3 className="pb-2 mb-4 mt-5">
                        <Link to="recommended-players" className="text-decoration-none float-end link-success">
                            See All
                        </Link>
                        Recommended Tennis players</h3>
                    <div className="row">
                        {fetchUsers(getUsersState, baseUrl)}
                    </div>
                    {/*End Recommended users*/}
                    {/*Start of paginaation*/}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mt-5 pagination-lg">
                            <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                        </ul>
                    </nav>
                    {/*End of pagination*/}
                </>
            }
        </div>
    );
}

export default RecommendedPlayers;