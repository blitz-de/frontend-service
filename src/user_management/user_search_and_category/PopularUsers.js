import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import tennisCompanionGetter from '../../utils/AxiosURLGetter';
import {fetchUsers} from '../../utils/UserFetcher';
const baseUrl = 'http://127.0.0.1:8080'
const endpoint = '/users/api/popular-players/';

function PopularUsers() {

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        console.log("imm popp")
        tennisCompanionGetter(endpoint, getUsersState,setUsersState,
            getErrorMessage, setErrorMessage);
    }, []);


    return (
        <div className="container mb-4">
            {/*Popular Tennis players*/}
            <h3 className="pb-1 mb-4 mt-5">
                <Link to="/popular-users" className="text-decoration-none float-end link-success">
                    See All
                </Link>
                Popular Tennis players</h3>
            <div className="row">
                {/*{renderProfileData()}*/}
                {fetchUsers(getUsersState, baseUrl)}
            </div>
            {/*End popular Tennis players*/}
        </div>
    )
}

export default PopularUsers;