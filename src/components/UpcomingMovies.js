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

  function navToMovieDetails() {
    // const arrayString = encodeURIComponent(JSON.stringify(moviedata))
    // nav(`/moviedetails/${moviedata}`)
    //nav('/moviedetails')
  }

  return (
    <div>
      <div className="pt-28">
        <h1 className="text-center mt-2 text-3xl">Upcoming Movies</h1>
        <hr className="border border-black mt-2" />

        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-5 gap-4">
            {data.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.Images}
                  alt="Image 1"
                  className="w-[14em] h-[20em] object-fill"
                />
                <button
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={navToMovieDetails()}
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
