import React, { useState, useEffect } from "react";
import { getmovies } from "./actions";
import "./Search.css";
import Movie from "./Movie";
import { connect } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";

function Search(props) {
  const [input, setInput] = useState();
  let baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getmovies();
  }, []);

  return (
    <div className='search'>
      <div className='search_header'>
        <input
          className='search_input'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Watch Trailers'
          type='text'
        />
        <SearchIcon
          className='search_button'
          onClick={() => props.getmovies(input)}
        />
      </div>

      <div className='search_movie_posters'>
        {props.movies.results?.map((item) => (
          <Movie
            movieclick={item}
            title={item.title}
            Image={`${baseURL}${item.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getmovies: (input) => dispatch(getmovies(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
