// import React, {useEffect, useState} from 'react';
// import tennisCompanionGetter from './AxiosURLGetter';
// import {Link} from 'react-router-dom';
// import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
// import axios from 'axios';
// import {fetchUsers} from './UserFetcher';
// const baseUrl = 'http://127.0.0.1:8080';
// const endpoint = '/users/api/registered-users/';
//
// // TODO: Add a filter panel
// export function UserFilter() {
//
//     const [filter, setFilter] = useState('');
//     const [getUsersState, setUsersState] = useState("");
//     // const [getResponseLength, setResponseLength] = useState(0);
//     const [getErrorMessage, setErrorMessage] = useState("");
//
//     useEffect(()=>{
//         try{
//             const response =  axios.get(baseUrl+endpoint);
//             console.log(response.data);
//             setTimeout(() => {
//                 setUsersState(response.data)
//
//             }, 1000);
//         } catch (err) {
//             if (err.response) {
//                 console.log(err.response.status); // 👉️ 404
//             } else if (err.message === "Network Error") {
//                 setErrorMessage(err.message);
//                 // console.clear();
//                 alert("🌏 User is supposed to have data to be fetched");
//             }
//         }
//     }, []);
//
//     const searchText = (event) => {
//         setFilter(event.target.value);
//         console.log("#######", event.target.value)
//
//     }
//
//     let dataSearch = getUsersState.users?.filter(item => {
//         return Object.keys(item).some(key=>
//             item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//         )
//     });
//
//     console.log("#####34", getUsersState)
//     return (
//         <nav className="navbar navbar-light bg-light mb-5">
//             <div className="container-fluid justify-content-center mb-5 mt-5">
//                 <form className="d-flex">
//                     <input className="form-control-lg me-2 col-md-12 col-"
//                            type="search" placeholder="Search"
//                            aria-label="Search"
//                            value={filter}
//                            onChange={searchText.bind(this)}
//                     />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//
//                 {dataSearch.map((user,index)=>{
//                     return (
//                         <div key={index} className="col-lg-3 mb-3 d-flex align-items-stretch">
//                             <div className="card">
//                                 <Link to={"/detail/"+user.pkid}><img src={baseUrl+user.profile_photo} className="card-img-top" alt="..." /></Link>
//                                 <div  className="card-body">
//                                     <h5> Name:
//
//                                         <Link className="link-secondary text-decoration-none" to={"/detail/"+user.pkid}>{" " +user.full_name}</Link>
//                                     </h5>
//                                     <h6>City: {user.city}</h6>
//                                     <h6>Region: {user.region +", "+user.zip_code}</h6>
//                                     <h6>Age: {user.age}</h6>
//                                     <h6>About Me:</h6><p>{user.about_me}</p>
//                                 </div>
//                                 <div  className='card-footer'>
//                                     <div className="title">
//                                             <span>Rating:
//                                                 <div style={{color: "orange"}}>
//                                                     {(user.rating>=1)?<IoIosStar />:(<IoIosStarOutline />)}
//                                                     {(user.rating>=2)?(<IoIosStar />):(<IoIosStarOutline />)}
//                                                     {(user.rating>=3)?(<IoIosStar />):(<IoIosStarOutline />)}
//                                                     {(user.rating>=4)?(<IoIosStar />):(<IoIosStarOutline />)}
//                                                     {(user.rating>=5)?(<IoIosStar />):(<IoIosStarOutline />)}
//                                                 </div>
//                                             </span>
//                                         <span className="float-end">Views: 1000</span>
//
//                                     </div>
//                                 </div>
//
//                             </div>
//
//                         </div>
//                     )
//                 })}
//             </div>
//         </nav>
//     );
// }
//
// export default UserFilter;
