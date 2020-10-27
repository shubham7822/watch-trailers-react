import { FETCH_MOVIES } from "./actiontypes";

const initialState = {
  movies: [],
  error: "",
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: "",
      };

    default:
      return state;
  }
};
