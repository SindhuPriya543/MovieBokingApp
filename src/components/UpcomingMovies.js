import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const UpcomingMovies = () => {
  const nav = useNavigate();
  const { upcomingMovies } = useSelector((state) => state.movies);

  function navToUpcomingMovieDetails(moviedata) {
    console.log(moviedata);
    nav("/moviedetails", { state: { moviedata } });
  }

  return (
    <div>
      <div className="pt-48">
        <h1 className="text-center mt-6 text-5xl">Upcoming Movies</h1>
        {/* <hr className="border border-gray-300 mt-2" /> */}

        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-5 gap-[2rem]">
            {upcomingMovies &&
              upcomingMovies.slice(5, 15).map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={item.Images}
                    alt="Movie"
                    className="w-[14em] h-[20em] object-fill rounded-xl"
                  />
                  <button
                    className="mt-2 bg-[#58CCC9] text-black font-bold text-xl py-4 px-4 rounded cursor-pointer "
                    onClick={() => navToUpcomingMovieDetails(item)}
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
