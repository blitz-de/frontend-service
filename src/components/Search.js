

// TODO: Add a filter panel
function Search() {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="container-fluid justify-content-center mb-5 mt-5">
                <form className="d-flex">
                    <input className="form-control-lg me-2 col-md-12 col-" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Search;
