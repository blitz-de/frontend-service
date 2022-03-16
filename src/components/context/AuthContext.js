import { createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
const baseUrl = 'http://localhost:8001/api/token/'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {


    let {authTokens, setAuthTokens} = useState(null);
    let {user, setUser} = useState(null);

    const loginUser = async (e) => {
        console.log(e);

        const userFormData = new FormData();
        userFormData.append("email", e.email)
        userFormData.append("password", e.password)

        try{
            axios.post(baseUrl, userFormData).then((response)=>{

                // first: fetch the data from the backend
                if(response.data.bool==true){
                    /* second: save the fetched data in localStorage
                     as long as it stays alive in the browser */
                    localStorage.setItem('userLoginStatus', true)
                    window.location.href='/user-dashboard';
                }
                console.log(response.data)
            });
        } catch (error){
            console.log(error);
        }
    }

    let contextData = {
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={{"name": "roger"}}>
            {children}
        </AuthContext.Provider>
    )
}