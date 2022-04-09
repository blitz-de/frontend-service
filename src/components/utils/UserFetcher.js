import React from "react";
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import {Link} from 'react-router-dom';

// url: baseUrl
export function fetchUsers (variableUserState, baseUrl) {

    // return getUsersState.first_name?.map((user, index) => {
    console.log("inside gfetcher ", variableUserState, baseUrl)
    return variableUserState.users?.map((user, index) => {
        return (
            <div key={index} className="col-lg-3 mb-3 d-flex align-items-stretch">
                <div className="card">
                    <Link to="#"><img src={baseUrl+user.profile_photo} className="card-img-top" alt="..." /></Link>
                    <div  className="card-body">
                        <h5> Name:
                            <Link className="link-secondary text-decoration-none" to="##">{" " +user.first_name} {user.last_name}</Link>
                        </h5>
                        <h5>Region: </h5>
                        <h5>Age: </h5>
                        <h5>About Me:</h5><p>{user.about_me}</p>
                    </div>
                    <div  className='card-footer'>
                        <div className="title">
                                <span>Rating:
                                    <div style={{color: "orange"}}>
                                        {(user.rating>=1)?<IoIosStar />:(<IoIosStarOutline />)}
                                        {(user.rating>=2)?(<IoIosStar />):(<IoIosStarOutline />)}
                                        {(user.rating>=3)?(<IoIosStar />):(<IoIosStarOutline />)}
                                        {(user.rating>=4)?(<IoIosStar />):(<IoIosStarOutline />)}
                                        {(user.rating>=5)?(<IoIosStar />):(<IoIosStarOutline />)}
                                    </div>
                                </span>
                            <span className="float-end">Views: 1000</span>

                        </div>
                    </div>

                </div>

            </div>
        )
    })
}
// export default fetchUsers;