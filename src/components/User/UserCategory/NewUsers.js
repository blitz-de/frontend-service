import React from 'react';
import {Link} from 'react-router-dom';

function NewUsers () {
    
    return(

        <div>
            {/*Start of New Users*/}
            <h3 className="pb-1 mb-4 mt-5"><Link to="new-users" className="float-end">See All</Link>
                New Tennis players</h3>
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
                                <span className="float-end">Rating: 3.4/5</span>
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
                                <span className="float-end">Rating: 3.4/5</span>
                            </div>
                        </div>
                    </div>
                </div>

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

export default NewUsers;