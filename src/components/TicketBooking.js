import React from "react";
import { useNavigate } from "react-router-dom";
import MyDatePicker from "./MyDatePicker";
import { useState } from "react";

export const TicketBooking = () => {
  const nav = useNavigate();
  const timings = ["5:45 p.m.", "6:45 p.m.", "8:00 p.m.", "9:30 p.m."];

  function NavToFinalBooking() {
    nav("/finalbooking");
  }

  const [selectedSeats, setSelectedSeats] = useState(1);

  const handleSeatChange = (e) => {
    setSelectedSeats(e.target.value);
  };

  return (
    <div>
      <div className="pt-48 px-40">
        <div className="w-full h-96 flex border">
          <div className="w-3/10 border flex justify-center items-center border-black">
            nn
          </div>
          <div className="w-7/10">
            <div className="w-full h-1/3 flex border  border-black">
              <div className="w-4/10 border border-black font-roboto text-4xl flex justify-center items-center">
                Select Date
              </div>

              <div className="w-6/10 border border-black font-roboto text-4xl flex justify-center items-center">
                <MyDatePicker />
              </div>
            </div>
            <div className="w-full h-1/3 flex border  border-black">
              <div className="w-4/10 border border-black font-roboto text-4xl flex justify-center items-center">
                Available Show Timings
              </div>

              <div className="w-6/10 border border-black  flex justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  {timings.map((time, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-100 border border-black rounded-md text-xl font-bold cursor-pointer hover:bg-[#FFA2A0] hover:text-white transition-colors duration-300"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-1/3 flex border  border-black">
              <div className="w-4/10 border border-black font-roboto text-4xl flex justify-center items-center">
                Choose Number Of Seats
              </div>

              <div className="w-6/10 border border-black font-roboto text-4xl flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <select
                    id="seat-selection"
                    value={selectedSeats}
                    onChange={handleSeatChange}
                    className=" px-4 py-2 border text-center border-black rounded-md text-xl font-bold cursor-pointer bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {[...Array(10).keys()].map((index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-2 bg-[#58CCC9] text-black font-bold text-xl py-4 px-4 rounded cursor-pointer "
            onClick={NavToFinalBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
