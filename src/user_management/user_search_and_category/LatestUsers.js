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
    const [getErrorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        tennisCompanionGetter(endpoint, getUsersState,setUsersState,
            getErrorMessage, setErrorMessage);
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
                {fetchUsers(getUsersState, baseUrl)}
            </div>

        </div>
    );
}

export default LatestUsers;