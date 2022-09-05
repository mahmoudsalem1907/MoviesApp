import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const [moviedetails, setMoviesDetails] = useState({});
  let params = useParams();
  async function getDate({ id }) {
    let { data } = await axios.get(
      //507086
      `https://api.themoviedb.org/3/movie/${id}?api_key=7efb5e7d024a7ea715fdbf8a745ac0d1&language=en-US`
    );
    console.log(data);
    setMoviesDetails(data);
  }

  useEffect(() => {
    // console.log(params);
    getDate(params);
  }, []);

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-4">
          <img
            className="w-100"
            src={"https://image.tmdb.org/t/p/w500" + moviedetails.poster_path}
            alt=""
          />
        </div>
        <div className="col-md-8 py-5">
          <h1 className="mb-5">{moviedetails.original_title}</h1>
          {moviedetails && moviedetails.genres
            ? moviedetails.genres.map((e) => (
                <span className="p-2 bg-info m-2 border border-info rounded-pill">
                  {e.name}
                </span>
              ))
            : ""}
          <p className="mt-5">Vote : {moviedetails.vote_average}</p>
          <p>Vote Count : {moviedetails.vote_count}</p>
          <p className="mb-5">Release Date : {moviedetails.release_date}</p>
          <p className="p-2">{moviedetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
