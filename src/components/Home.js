import React from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesImageSlider from "./MoviesImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/reducers/movieReducer";

export const Home = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { recommendedMovies } = useSelector((state) => state.movies);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  function navToLatestMovies() {
    nav("/latestmovies");
  }

  function navToUpcomingMovies() {
    nav("/upcomingmovies");
  }

  function navToNearByEvents() {
    nav("/nearbyevents");
  }

  function navToMovieDetails(moviedata) {
    console.log(moviedata);
    nav("/moviedetails", { state: { moviedata } });
  }

  const images = [
    "https://i.ytimg.com/vi/u2NuUWuwPCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOCoIl_z_mh65aeD8irtoicup6-w",
    "https://m.media-amazon.com/images/S/pv-target-images/58e8a7988c6ba4b1979709adb606ca5b59a39eaf6fb02060bcdfef01ef1d8909.jpg",
    "https://i.ytimg.com/vi/Sz71FoG5z2g/maxresdefault.jpg",
    "https://upload.wikimedia.org/wikipedia/en/1/18/Inception_OST.jpg",
    "https://i.ytimg.com/vi/njPNg0A9VpY/sddefault.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EFE5D659E7C958E1177440F847E6CDAEBFD90F3162991ABE61FB584231DDAC1/scale?width=1200&aspectRatio=1.78&format=webp",
  ];
  return (
    <div>
      {/* {location.pathname !== "/" && <Header />} */}
      <div className="mt-28">
        <div className="flex justify-between gap-4 mt-[8.5rem] mx-4">
          <div
            className="w-1/3 h-40 bg-[#58CCC9] rounded-md text-black font-bold flex items-center justify-center text-5xl cursor-pointer"
            onClick={navToLatestMovies}
          >
            Latest Movies
          </div>
          <div
            className="w-1/3 h-40 bg-[#58CCC9] rounded-md text-black font-bold flex items-center justify-center text-5xl cursor-pointer"
            onClick={navToUpcomingMovies}
          >
            Upcoming Movies
          </div>
          <div
            className="w-1/3 h-40 bg-[#58CCC9] rounded-md text-black font-bold flex items-center justify-center text-5xl cursor-pointer"
            onClick={navToNearByEvents}
          >
            Near By Events
          </div>
        </div>

        <div className="mt-6">
          <MoviesImageSlider images={images} />
        </div>

        {/* <hr className="border border-gray-300 mt-10" /> */}
        <h1 className="text-center mt-[5rem] text-4xl font-bold">
          Recommended Movies
        </h1>

        <div className="flex justify-center px-8 mt-3">
          <div className="flex space-x-4">
            {recommendedMovies.slice(1, 5).map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.Images}
                  alt="Movie"
                  className="w-80 h-80 object-fill"
                />
                <button
                  className="mt-2 bg-[#4CBEB6] texl-4xl text-black font-semibold w-[10rem] p-4 rounded"
                  onClick={() => navToMovieDetails(item)}
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
