import React, { useEffect, useState } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import classes from "./Movies.module.css";
import LoadingSpinner from "../Layout/LoadingIndicator";
const base_url = "https://image.tmdb.org/t/p/original/";
const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [trialUrl, setTrialUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      setIsLoading(false);
      // return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleTrailer = (movie) => {
    if (trialUrl) {
      setTrialUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrialUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(trialUrl);
  };
  return (
    <div className="rows">
      <h3>{props.title}</h3>
      <div className={classes.row__Poosters}>
        {isLoading && <LoadingSpinner />}
        {movies.map((movie) => (
          <img
            onClick={() => {
              handleTrailer(movie);
            }}
            key={movie.id}
            className={`${classes.row__Pooster} ${
              props.isLargeRow ? classes.row__PosterLarge : ""
            } `}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trialUrl && <YouTube videoId={trialUrl} opts={opts} />}
    </div>
  );
};
export default Movies;
