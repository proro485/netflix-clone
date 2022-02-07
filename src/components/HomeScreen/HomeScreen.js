import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import requests from '../../fetching/Requests'
import Row from '../Row/Row';
import './HomeScreen.css';

export default function HomeScreen() {
    return (
        <div className="homescreen">
            <Navbar />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        </div>
    );
}
