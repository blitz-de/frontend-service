import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const baseUrl = 'http://localhost:8080/api'

function LatestUsers () {

    const [getUsersState, setUsersState] = useState("");
    const [getResponseLength, setResponseLength] = useState(0);
    console.log("imm")
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/latest-players/').then((response)=>{
                console.log("I am here")
                console.log(response.data);

                setTimeout(() => {
                    setUsersState(response.data)
                    setResponseLength(Object.keys(response.data).length)
                    setResponseLength(Object.keys(response.data).length)
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
                <div key={index.toString()}  className="col-md-4">
                    <div className="card">
                        <Link to="#"><img src={'http://localhost:8080'+getUsersState[index].profile_photo} className="card-img-top" alt="..." /></Link>
                        <div  className="card-body">
                            <h5 className="card-tile">Here I am {user}
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
    return(

        <div>
            {/*start latest courses*/}
            <h3 className="pb-2 mb-4 mt-5"><Link to="latest-users" className="float-end">See All</Link>
                Latest Tennis players</h3>
            <div className="row">
                {renderProfileData()}


                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <Link to="/detail/1"><img src="/images/logo192.png" className="card-img-top" alt="Logo" /></Link>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><Link to="/detail/1">Tennis Game</Link></h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><a href="#">Football</a></h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4">*/}
                {/*    <div className="card">*/}
                {/*        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-tile"><a href="#">Basketball</a></h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            {/*End latest users*/}
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
        </div>
    );
}

export default LatestUsers;