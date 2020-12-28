import React, { useState, useEffect } from "react";
import { getmovies } from "./actions";
import "./Search.css";
import Movie from "./Movie";
import { connect } from "react-redux";
import { Button } from '@material-ui/core'

import SearchIcon from "@material-ui/icons/Search";

function Search(props) {
  const [input, setInput] = useState();
  const[Inputvalue,setInputValue] = useState("");
  let baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getmovies();
  }, []);

  const searchHandler = (e) => {
    props.getmovies(input)
   setInput("")
  e.preventDefault();
  }
  return (
    <div className='search'>
      <div className='search_header'>
        <input
          className='search_input'
          value={input || ''}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Watch Trailers'
          type='text'
        />
        <Button disabled={!input}  onClick={searchHandler} className="search_button"> // Disable if not having input
        <SearchIcon/>
        </Button>
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
