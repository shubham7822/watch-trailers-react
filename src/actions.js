import { FETCH_MOVIES } from "./actiontypes";

import axios from "axios";
export const fetchMovies = (movies) => {
  return {
    type: FETCH_MOVIES,
    payload: movies,
  };
};

const APIKEY = process.env.REACT_APP_SECRET_KEY;

export const getmovies = (input) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${input}&page=1&include_adult=false`
      )
      .then((response) => {
        const movies = response.data;
        dispatch(fetchMovies(movies));
      })
      .catch((error) => {
        console.log("error fetching data");
      });
  };
};
