import React from "react";
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';
import {Link} from 'react-router-dom';

export  function fetchUsers (variableUserState, baseUrl) {

    return variableUserState.users?.map((user, index) => {
        return (
            <div key={index} className="col-lg-3 mb-3 d-flex align-items-stretch">
                <div className="card">
                    <Link to={"/detail/"+user.pkid}><img src={baseUrl+user.profile_photo} className="card-img-top" alt="..." /></Link>
                    <div  className="card-body">
                        <h5> Name:
                            
                            <Link className="link-secondary text-decoration-none" to={"/detail/"+user.pkid}>{" " +user.full_name}</Link>
                        </h5>
                        <h6>City: {user.city}</h6>
                        <h6>Region: {user.region +", "+user.zip_code}</h6>
                        <h6>Age: {user.age}</h6>
                        <h6>About Me:</h6><p>{user.about_me}</p>
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