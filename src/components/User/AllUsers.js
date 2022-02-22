import {Link} from 'react-router-dom';

function AllUsers () {
    return(

        <div>
            {/*start latest courses*/}
            <h3 className="pb-2 mb-4"><Link to="all-users" className="float-end">See All</Link>
                Latest Tennis players</h3>
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-tile"><Link to="/detail/1">Tennis Game</Link></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-tile"><a href="#">Football</a></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-tile"><a href="#">Basketball</a></h5>
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

export default AllUsers;