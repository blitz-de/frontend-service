import {useState} from "react";
import { Country, State, City }  from 'country-state-city';

const {countryState, setCountryState} = useState("");


const fetchCountries = async (endpoint,
                                     getUsersState,
                                     setUsersState,
                                     getErrorMessage,
                                     setErrorMessage) =>{
    try{
        const response = await  axios.get(baseUrl+endpoint);
        // console.log(response.data);
        setTimeout(() => {
            setUsersState(response.data)
            // console.log("get localStorage info: ", getUsersState.users[0])
            // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", userLoginStatus)
            // return response.data;
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

export default fetchCountries;