import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../../fetching/Axios';

export default function Row({ title, fetchUrl, isLarge = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className={`movie_list ${isLarge && "movie_list_large"}`}>
                {
                    movies.length && movies.map((element, idx) => {
                        return (
                            ((isLarge && element.poster_path) || (!isLarge && element.backdrop_path)) && <div className="movie_card" key={idx}>
                                <img className={`${isLarge ? "isLarge" : "isSmall"}`}
                                    src={isLarge ? `https://image.tmdb.org/t/p/original/${element.poster_path}`
                                        : `https://image.tmdb.org/t/p/original/${element.backdrop_path}`}
                                    alt={element.name || element.title || element.original_name || element.original_title}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
