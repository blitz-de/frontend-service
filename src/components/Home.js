// import {Link} from 'react-router-dom';
import Search from "./Search";
// import AllUsers from './User/AllUsers';
import PopularUsers from '../user_management/user_search_and_category/PopularUsers';
import LatestUsers from '../user_management/user_search_and_category/LatestUsers';
// import NewUsers from '../user_management/user_search_and_category/NewUsers';
import RecommendedPlayers from '../user_management/user_search_and_category/RecommendedPlayers';
import React, {useEffect}from 'react';

function Home() {
    useEffect(()=>{
        document.title='Tennis Companion homepage'
    });

    return (

        <div>
            <Search />
        <div className="container mb-4">
            {/*Latest Tennis players*/}
            <LatestUsers/>
            {/*End latest Tennis players*/}
            {/*Popular Tennis players*/}
            <PopularUsers />
            {/*End popular Tennis players*/}
            {/*New Tennis players*/}
            <RecommendedPlayers/>
            {/*End New Tennis players*/}

            {/*Players Testimonials*/}
            <h3 className="pb-1 mb-4 mt-5">Players Testimonials</h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>With Tennis Companion you will never play alone again!</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>It was easy and forward to find another Tennis player. It's the best website ever.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>The efficiency and simplicity of the website is what makes it spectacular.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/*End PlayerTestimonials*/}
        </div>

</div>
    );
}

export default Home;
