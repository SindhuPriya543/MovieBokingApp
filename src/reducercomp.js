import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  latestMovies: [],
  recommendedMovies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {
      state.latestMovies = action.payload.latestMovies;
      state.recommendedMovies = action.payload.recommendedMovies;
      state.loading = false;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  movieSlice.actions;

// Thunk for fetching movies from API
export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const latestResponse = await axios.get(
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
    ); // Replace with actual API
    const recommendedResponse = await axios.get(
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
    );
    dispatch(
      fetchMoviesSuccess({
        latestMovies: latestResponse.data,
        recommendedMovies: recommendedResponse.data,
      })
    );
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export default movieSlice.reducer;
