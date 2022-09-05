import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TvDetails = () => {
  const [tvdetails, setTvDetails] = useState({});
  let params = useParams();
  async function getdata({ id }) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=7efb5e7d024a7ea715fdbf8a745ac0d1&language=en-US`
    );
    setTvDetails(data);
  }
  useEffect(() => {
    getdata(params);
  }, []);
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-4">
          <img
            className="w-100"
            src={"https://image.tmdb.org/t/p/w500" + tvdetails.poster_path}
            alt=""
          />
        </div>
        <div className="col-md-8 py-5">
          <h1 className="mb-5">{tvdetails.name}</h1>
          {tvdetails && tvdetails.genres
            ? tvdetails.genres.map((e) => (
                <span className="p-2 bg-info m-2 border border-info rounded-pill">
                  {e.name}
                </span>
              ))
            : ""}
          <p className="mt-5">Vote : {tvdetails.vote_average}</p>
          <p>Vote Count : {tvdetails.vote_count}</p>
          <p className="mb-5">Release Date : {tvdetails.release_date}</p>
          <p className="p-2">{tvdetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default TvDetails;
