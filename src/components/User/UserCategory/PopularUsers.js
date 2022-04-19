import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
                    // console.log("gsssafsogh", getUsersState)
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
                            <h5  className="card-tile">Here I am
                                {getResponseLength} {getUsersState[index].first_name}<Link to="##">{getUsersState[index].first_name} {getUsersState[index].last_name}</Link></h5>
                        </div>
                        <div  className='card-footer'>
                            <div className="title">
                                <span>Rating: {getUsersState[index].rating}</span>
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
                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <Link to="#"><img src="logo512.png" className="card-img-top" alt="..." /></Link>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><Link to="#">Tennis Game</Link></h5>*/}
                {/*        </div>*/}
                {/*        /!*TODO: fetch rating and make icons instead of numbers*!/*/}
                {/*        <div className='card-footer'>*/}
                {/*            <div className="title">*/}
                {/*                <span>Rating: 3.4/5</span>*/}
                {/*                <span className="float-end">Views: 1000</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <Link to="#"><img src="logo512.png" className="card-img-top" alt="..." /></Link>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><Link to="#">Football</Link></h5>*/}
                {/*        </div>*/}
                {/*        /!*TODO: fetch rating and make icons instead of numbers*!/*/}
                {/*        <div className='card-footer'>*/}
                {/*            <div className="title">*/}
                {/*                <span>Rating: 3.4/5</span>*/}
                {/*                <span className="float-end">Views: 1000</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <Link to="#"><img src="logo512.png" className="card-img-top" alt="..." /></Link>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><Link to="#">Basketball</Link></h5>*/}
                {/*        </div>*/}
                {/*        /!*TODO: fetch rating and make icons instead of numbers*!/*/}
                {/*        <div className='card-footer'>*/}
                {/*            <div className="title">*/}
                {/*                <span>Rating: 3.4/5</span>*/}
                {/*                <span className="float-end">Views: 1000</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            {/*End popular Tennis players*/}
        </div>
    )
}

export default PopularUsers;