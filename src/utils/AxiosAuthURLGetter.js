import {useState} from "react";
import axiosInstance from '../components/axios';
// import usersFetched from './UserState';

const baseUrl = 'http://localhost:8080'

const authTennisCompanionGetter = async (endpoint,
                                            getUsersState,
                                            setUsersState,
                                            getErrorMessage,
                                            setErrorMessage) =>{
    try{
        const response = await  axiosInstance.get(baseUrl+endpoint);
        console.log(response.data);
        setTimeout(() => {
            setUsersState(response.data)
        }, 1000);
    } catch (err) {
        if (err.response) {
            console.log(err.response.status); // 👉️ 404
        } else if (err.message === "Network Error") {
            setErrorMessage(err.message);
            // console.clear();
            alert("🌏 User is supposed to have data to be fetched");
        }
    }
}

export default authTennisCompanionGetter;