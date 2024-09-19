import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  // const [moviedata] = useParams();
  const nav = useNavigate();

  const location = useLocation();
  const { moviedata } = location.state;

  const NavToTicketBooking = () => {
    nav("/ticketbooking");
  };

  return (
    <div>
      <div className="pt-48 px-40">
        <div className="w-full h-96 flex border border-gray-500">
          <div className="w-3/10 border flex justify-center items-center border-gray-500">
            <img src={moviedata.Images} className="w-[36rem] h-[24rem]" />
          </div>
          <div className="w-7/10">
            <div className="w-full h-1/3 flex border  border-gray-500">
              <div className="w-5/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                {moviedata.Title}{" "}
              </div>

              <div className="w-5/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                {" "}
                {moviedata.Released}
              </div>
            </div>
            <div className="h-1/3 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
              Duration :{moviedata.Runtime}{" "}
            </div>

            <div className="h-1/3 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
              {" "}
              Rating : {moviedata.imdbRating}{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="mt-2 bg-[#58CCC9] text-black font-bold text-xl py-4 px-4 rounded cursor-pointer "
            onClick={NavToTicketBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
