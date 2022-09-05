import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [persons, setPersons] = useState([]);
  async function getData(type, setItem) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=7efb5e7d024a7ea715fdbf8a745ac0d1`
    );
    setItem(data.results);
  }
  useEffect(() => {
    getData("movie", setMovies);
    getData("tv", setTvs);
    getData("person", setPersons);
  }, []);
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-4 d-flex justify-content-center align-items-start flex-column">
          <h2>
            The Best MOVIES <br /> In The Cima Show <br />
            Trending......
          </h2>
        </div>
        {movies.slice(0, 16).map((movie) => (
          <div className="col-md-2 position-relative">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt=""
              className="w-100"
              srcset=""
            />
            <p className="my-2">{movie.title}</p>
            <span className="position-absolute top-0 mx-2 end-0 bg-info p-2 ">
              {Math.floor(movie.vote_average)}
            </span>
          </div>
        ))}
      </div>
      <div className="row my-3">
        <div className="col-md-4 d-flex justify-content-center align-items-start flex-column">
          <h2>
            The Best TV Show <br /> In The Cima Show <br />
            Trending......
          </h2>
        </div>
        {tvs.slice(0, 16).map((movie) => (
          <div className="col-md-2 position-relative">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt=""
              className="w-100"
              srcset=""
            />
            <p className="my-2">{movie.title}</p>
            <span className="position-absolute top-0 mx-2 end-0 bg-info p-2 ">
              {Math.floor(movie.vote_average)}
            </span>
          </div>
        ))}
      </div>
      {/* <div className="row my-3">
        <div className="col-md-4 d-flex justify-content-center align-items-start flex-column">
          <h2>
            The Best Peaple <br /> In The Cima Show <br />
            Trending......
          </h2>
        </div>
        {persons.slice(0, 10).map((movie) => (
          <div className="col-md-2 position-relative">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.profile_path}
              alt=""
              className="w-100"
              srcset=""
            />
            <p className="my-2">{movie.name}</p>
            <span className="position-absolute top-0 mx-2 end-0 bg-info p-2 ">
              {Math.floor(movie.popularity)}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
