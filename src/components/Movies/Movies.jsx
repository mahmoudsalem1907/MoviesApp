import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Movies = () => {
  const [filter, setFilter] = useState("");
  const searchText = (e) => {
    setFilter(e.target.value);
  };
  const [movies, setMovies] = useState([]);
  async function getData(type, setItem) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=7efb5e7d024a7ea715fdbf8a745ac0d1`
    );
    setItem(data.results);
  }
  useEffect(() => {
    getData("movie", setMovies);
  }, []);
  const handlersearch = (e) => {
    console.log(e.target.value.toLowerCase());
    setFilter(e.target.value.toLowerCase());
  };
  let dataSearch = movies.filter((item) =>
    item.title.toLowerCase().includes(filter)
  );
  return (
    <div className="container">
      <input
        className="form-control me-2 mt-3"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={filter}
        onChange={handlersearch}
      />
      <div className="row my-3">
        {dataSearch.map((movie) => (
          <div className="col-md-2 position-relative" key={movie.id}>
            <Link to={"/moviedetails/" + movie.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt=""
                className="w-100"
                srcset=""
              />
            </Link>

            <p className="my-2">{movie.title}</p>
            <span className="position-absolute top-0 mx-2 end-0 bg-secondary p-2 ">
              {Math.floor(movie.vote_average)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
