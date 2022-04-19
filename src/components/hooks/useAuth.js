import {useContext} from 'react';
import AuthContext from "../context/AuthProivider";

export default function useAuth() {
    // false: user is not authenticated
    const auth = false;

    return auth;
}