import {useState} from "react";
import axios from 'axios';

const baseUrl = 'http://localhost:8080'

const tennisCompanionGetter = async (endpoint,
                                     getUsersState,
                                     setUsersState,
                                     getErrorMessage,
                                     setErrorMessage) =>{
    try{
        const response = await  axios.get(baseUrl+endpoint);
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

export default tennisCompanionGetter;