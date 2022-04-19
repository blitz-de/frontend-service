import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import axiosInstance from '../../axios'
import tennisCompanionGetter from '../../utils/AxiosURLGetter';
import {fetchUsers} from '../../utils/UserFetcher';

const baseUrl = 'http://127.0.0.1:8080'
const endpoint = '/api/recommended-players/';
function RecommendedPlayers () {
    
    const userLoginStatus = localStorage.getItem('userLoginStatus');
    const [getErrorMessage, setErrorMessage] = useState("");

    const [getUsersState, setUsersState] = useState("");
    const [getResponseLength, setResponseLength] = useState(0);
    console.log("imfm")


    // async function makeRequest() {
    //     try{
    //         const response = await  axiosInstance.get(baseUrl+'/api/recommended-players/');
    //         console.log(response.data);
    //         setTimeout(() => {
    //             setUsersState(response.data)
    //             console.log("get localStorage info: ", getUsersState)
    //             // fetchUsers(getUsersState, baseUrl);
    //
    //             console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
    //                 )
    //         }, 1000);
    //     } catch (err) {
    //         if (err.response) {
    //             console.log(err.response.status); // 👉️ 404
    //         } else if (err.message === "Network Error") {
    //             setErrorMessage(err.message);
    //             // console.clear();
    //             alert("🌏 User is supposed to have data to be fetched");
    //         }
    //     }
    // }
    useEffect(() => {
        // makeRequest()
        if (userLoginStatus == 'true'){
            tennisCompanionGetter(endpoint, getUsersState,setUsersState,
                getErrorMessage, setErrorMessage);
        }
    }, []);


    // //src={baseUrl+getUsersState[index].profile_photo
    // function renderProfileData() {
    //     // return getUsersState.first_name?.map((user, index) => {
    //     return getUsersState.users?.map((user, index) => {
    //         return (
    //             <div key={index} className="col-lg-3 mb-3 d-flex align-items-stretch">
    //                 <div className="card">
    //                     <Link to="#"><img src={baseUrl+user.profile_photo} className="card-img-top" alt="..." /></Link>
    //                     <div  className="card-body">
    //                         <h5> Name:
    //                             <Link className="link-secondary text-decoration-none" to="##">{" " +user.first_name} {user.last_name}</Link>
    //                         </h5>
    //                         <h5>Region: </h5>
    //                         <h5>Age: </h5>
    //                         <h5>About Me:</h5><p>{user.about_me}</p>
    //                     </div>
    //                     <div  className='card-footer'>
    //                         <div className="title">
    //                             <span>Rating:
    //                                 <div style={{color: "orange"}}>
    //                                     {(user.rating>=1)?<IoIosStar />:(<IoIosStarOutline />)}
    //                                     {(user.rating>=2)?(<IoIosStar />):(<IoIosStarOutline />)}
    //                                     {(user.rating>=3)?(<IoIosStar />):(<IoIosStarOutline />)}
    //                                     {(user.rating>=4)?(<IoIosStar />):(<IoIosStarOutline />)}
    //                                     {(user.rating>=5)?(<IoIosStar />):(<IoIosStarOutline />)}
    //                                 </div>
    //                             </span>
    //                             <span className="float-end">Views: 1000</span>
    //
    //                         </div>
    //                     </div>
    //
    //                 </div>
    //
    //             </div>
    //         )
    //     })
    // }
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