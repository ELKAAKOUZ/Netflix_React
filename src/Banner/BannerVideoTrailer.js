import React from "react";
import YouTube from "react-youtube";
import classes from "./BannerVideoTrailer.module.css";

const BannerVideoTrailer = (props) => {
  return (
    <div className={classes.videoDiv}>
      <YouTube videoId={props.trialUrl} opts={props.opts} />
    </div>
  );
};

export default BannerVideoTrailer;
