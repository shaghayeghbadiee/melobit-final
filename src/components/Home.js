import React from 'react';
import Carousel from "./Carousel";
import Newsongs from './Newsongs';
import Topdaysong from './Topdaysong';
import Topweeksong from './Topweeksong';
import Trendingartists from './Trendingartists';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Newsongs/>
           
            <Topdaysong/>
            <Topweeksong/>
            <Trendingartists/>
        </div>
    );
}

export default Home;