import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UpcomingMovies = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
      )
      .then((response) => setData(response.data));
  }, []);

  function navToUpcomingMovieDetails(moviedata) {
    console.log(moviedata);
    nav("/moviedetails", { state: { moviedata } });
  }

  return (
    <div>
      <div className="pt-28">
        <h1 className="text-center mt-6 text-4xl">Upcoming Movies</h1>
        <hr className="border border-gray-400 mt-2" />

        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-5 gap-4">
            {data.slice(5, 15).map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.Images}
                  alt="Movie"
                  className="w-[14em] h-[20em] object-fill"
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
