import React, {useEffect, useState} from 'react';
import tennisCompanionGetter from '../utils/AxiosURLGetter';
import {Link} from 'react-router-dom';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
// import UserFilter from './utils/UserFilter';
const baseUrl = 'http://127.0.0.1:8080';
const endpoint = '/users/api/registered-users/';

// TODO: Add a filter panel
function Search() {

    // const [filter, setFilter] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const [getUsersState, setUsersState] = useState("");
    const [getErrorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        tennisCompanionGetter(endpoint, getUsersState,setUsersState,
            getErrorMessage, setErrorMessage);
    }, []);

    const searchText = (event) => {
        setSearchInput(event.target.value);

        const filteredData = getUsersState['users'].filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        console.log(event.target.value)
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)

    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light mb-5">
                <div className="container-fluid justify-content-center mb-5 mt-5">
                    <form className="d-flex">
                        <input className="form-control-lg me-2 col-md-12 col-"
                               type="search" placeholder="Search"
                               aria-label="Search"
                               value={searchInput}
                               onChange={searchText.bind(this)}
                        />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="row">
                {/*{UserFilter()}*/}

            </div>
    </div>
    );
}

export default Search;
