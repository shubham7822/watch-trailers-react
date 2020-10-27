import React, { useState } from "react";
import "./Movie.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function Movie({ Image, title, movieclick }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const user = auth.currentUser;

  const handleVideo = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movieclick?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "100%",
    width: "500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='movie'>
      <img onClick={handleVideo} className='movie_image' src={Image} />
      <h3 className='movie_title'>{title}</h3>
      <div>
        {user ? (
          trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
        ) : (
          <Link className='movie_redirect_to_login' to='/login'>
            <button className='movie_loginbtn'>login to watch</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Movie;
