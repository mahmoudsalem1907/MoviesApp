import React, { useState, useEffect } from "react";
import axios from "axios";
const TvShow = () => {
  const [tvs, setTvs] = useState([]);
  async function getData(type, setItem) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=7efb5e7d024a7ea715fdbf8a745ac0d1`
    );
    setItem(data.results);
  }
  useEffect(() => {
    getData("tv", setTvs);
  }, []);
  return (
    <div className="container">
      <div className="row my-3">
        {tvs.map((e) => (
          <div className="col-md-2 position-relative">
            <img
              src={"https://image.tmdb.org/t/p/w500" + e.poster_path}
              alt=""
              className="w-100"
              srcset=""
            />
            <p className="my-2">{e.name}</p>
            <span className="position-absolute top-0 mx-2 end-0 bg-secondary p-2 ">
              {Math.floor(e.vote_average)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShow;
