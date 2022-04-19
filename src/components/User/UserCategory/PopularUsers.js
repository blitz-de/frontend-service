import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {IoIosStar, IoIosStarOutline } from 'react-icons/io';

const baseUrl = 'http://localhost:8080/api'

function PopularUsers() {

    const [getUsersState, setUsersState] = useState("");
    const [getResponseLength, setResponseLength] = useState(0);
    console.log("imm")
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/popular-players/').then((response)=>{
                console.log("I am here")
                console.log(response.data);
                // getUsersState = response.data;
                //console.log("the user] state: ", Object.keys(response.data).length)
                setTimeout(() => {
                    setUsersState(response.data)
                    setResponseLength(Object.keys(response.data).length)

                    // console.log("Data length: ", getResponseLength).
                }, 1000);
            });
        }
        catch (error) {
            console.log("here is an error: " + error);
        }

    }, []);

    function renderProfileData() {
        // return getUsersState.first_name?.map((user, index) => {
        return Array.from(Array(getResponseLength), (user, index) => {
            return (
                <div key={index} className="col-md-4">
                    <div className="card">
                        <Link to="#"><img src={'http://localhost:8080'+getUsersState[index].profile_photo} className="card-img-top" alt="..." /></Link>
                        <div  className="card-body">
                            <h5  className="card-tile">Here I am {getUsersState[index].rating}
                                {getUsersState[index].first_name}<Link to="##">{getUsersState[index].first_name} {getUsersState[index].last_name}</Link></h5>
                        </div>
                        <div  className='card-footer'>
                            <div className="title">
                                <span>Rating:
                                    <div style={{color: "orange"}}>
                                        {(getUsersState[index].rating>=1)?<IoIosStar />:(<IoIosStarOutline />)}
                                        {(getUsersState[index].rating>=2)?(<IoIosStar />):(<IoIosStarOutline />)}
                                        {(getUsersState[index].rating>=3)?(<IoIosStar />):(<IoIosStarOutline />)}
                                        {(getUsersState[index].rating>=4)?(<IoIosStar />):(<IoIosStarOutline />)}
                                        {(getUsersState[index].rating>=5)?(<IoIosStar />):(<IoIosStarOutline />)}
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
    return (
        <div>
            {/*Popular Tennis players*/}
            <h3 className="pb-1 mb-4 mt-5"><Link to="/popular-users" className="float-end">See All</Link>
                Popular Tennis players</h3>
            <div className="row">
                {renderProfileData()}


            </div>
            {/*End popular Tennis players*/}
        </div>
    )
}

export default PopularUsers;