import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LatestMovies = () => {
  const { latestMovies } = useSelector((state) => state.movies);
  const nav = useNavigate();

  function navToLatestMovieDetails(moviedata) {
    console.log(moviedata);
    nav("/moviedetails", { state: { moviedata } });
  }

  return (
    <div>
      <div className="pt-48">
        <h1 className="text-center mt-6 text-5xl">Latest Movies</h1>
        {/* <hr className="border border-gray-300 mt-2" /> */}

        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-5 gap-[2rem]">
            {latestMovies &&
              latestMovies.slice(5, 15).map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={item.Images}
                    alt="Movie"
                    className="w-[14em] h-[20em] object-fill rounded-xl"
                  />
                  <button
                    className="mt-2 bg-[#58CCC9] text-black font-bold text-xl py-4 px-4 rounded cursor-pointer "
                    onClick={() => navToLatestMovieDetails(item)}
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
