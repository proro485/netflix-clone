import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../../fetching/Axios';
import requests from '../../fetching/Requests';

export default function Banner() {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length)]
            );
            return request;
        }

        fetchData();
    }, [])

    const truncateDescription = (description) => {
        let words = description.split(" ");
        if (words.length > 20) {
            words = words.filter((element, idx) => {
                return idx < 20;
            })
            description = words.join(" ");
            description += "..."
            return description;
        }
        return description;
    }

    return (
        <div className="banner" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name || movie?.original_title}</h1>
                <button className="banner_buttons">Play</button>
                <button className="banner_buttons">My List</button>
                <h1 className="banner_description">{truncateDescription(movie?.overview || "")}</h1>
            </div>
            <div className="banner_fadeBottom" />
        </div >
    );
}