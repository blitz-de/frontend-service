import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

function PopularUsers() {
    const [user, setUser]=useState(null);
    useEffect(()=>{
        axios.get(baseUrl+'/tennisplayer/').then((response)=>{
            console.log(response.data);
        });
    }, []);
    return (
        <div>
            {/*Popular Tennis players*/}
            <h3 className="pb-1 mb-4 mt-5"><Link to="/popular-users" className="float-end">See All</Link>
                Popular Tennis players</h3>
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <Link to="#"><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-tile"><Link to="#">Tennis Game</Link></h5>
                        </div>
                        {/*TODO: fetch rating and make icons instead of numbers*/}
                        <div className='card-footer'>
                            <div className="title">
                                <span>Rating: 3.4/5</span>
                                <span className="float-end">Views: 1000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <Link to="#"><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-tile"><Link to="#">Football</Link></h5>
                        </div>
                        {/*TODO: fetch rating and make icons instead of numbers*/}
                        <div className='card-footer'>
                            <div className="title">
                                <span>Rating: 3.4/5</span>
                                <span className="float-end">Views: 1000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <Link to="#"><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-tile"><Link to="#">Basketball</Link></h5>
                        </div>
                        {/*TODO: fetch rating and make icons instead of numbers*/}
                        <div className='card-footer'>
                            <div className="title">
                                <span>Rating: 3.4/5</span>
                                <span className="float-end">Views: 1000</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*End popular Tennis players*/}
        </div>
    )
}

export default PopularUsers;