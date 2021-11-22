import React, { useState, useEffect, Fragment } from "react";
import classes from "./Banner.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = (props) => {
  const [movies, setMovies] = useState([]);
  const [trialUrl, setTrialUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=61857fa7a3bfec5158eadd34aca7f40a&with_genres=28"
      );
      const data = await request.json();
      setMovies(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      console.log(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      //   console.log(movies);
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const opts = {
    height: "555",
    width: "100%",
    frameBorder: "0",
    playerVars: {
      autoplay: 1,
    },
  };
  const videoHandler = (movies) => {
    setIsPlaying((prevState) => !prevState);
    // setIsPlaying(true);
    movieTrailer(movies?.name || movies?.title || movies?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams.get("v"));
        setTrialUrl(urlParams.get("v"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div
        className={classes.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movies.backdrop_path})`,
          // backgroundImage: `url(${trialUrl})`,

          backgroundPosition: "center center",
        }}
      >
        <div className={classes.banner_content}>
          <h4 className={classes.banner_title}>
            {movies?.original_name || movies?.name || movies?.title}
          </h4>
          <div className={classes.banner_buttons}>
            <button
              className={classes.banner_button}
              onClick={() => {
                videoHandler(movies);
              }}
            >
              {isPlaying ? "Stop" : "Play"}
            </button>
            <button className={classes.banner_button}>My-list</button>
          </div>
          <p className={classes.banner_description}>
            {truncate(movies?.overview, 150)}
          </p>
          <div className={classes.banner_fadeBottom}></div>
        </div>
      </div>
      {isPlaying && <YouTube videoId={trialUrl} opts={opts} />}
    </Fragment>
  );
};

export default Banner;
