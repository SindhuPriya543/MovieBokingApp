import { createSlice } from "@reduxjs/toolkit";
import { API_URL_FOR_MOVIESLIST } from "../constants";
import axios from "axios";

const initialState = {
  latestMovies: [],
  upcomingMovies: [],
  nearByEvents: [],
  recommendedMovies: [],
};
var movieSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    fetchMoviesSuccess: (state, action) => {
      state.latestMovies = action.payload.latestMovies;
      state.upcomingMovies = action.payload.upcomingMovies;
      state.nearByEvents = action.payload.nearByEvents;
      state.recommendedMovies = action.payload.recommendedMovies;
    },
  },
});

export const { fetchMoviesSuccess } = movieSlice.actions;

//thunk
export const fetchMovies = () => async (dispatch) => {
  const latestResponse = await axios.get(API_URL_FOR_MOVIESLIST);
  const upcomingResponse = await axios.get(API_URL_FOR_MOVIESLIST);
  const recommendedResponse = await axios.get(API_URL_FOR_MOVIESLIST);
  dispatch(
    fetchMoviesSuccess({
      latestMovies: latestResponse.data,
      upcomingMovies: upcomingResponse.data,
      recommendedMovies: recommendedResponse.data,
    })
  );
};

export default movieSlice.reducer;
