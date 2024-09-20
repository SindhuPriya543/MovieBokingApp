import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MyDatePicker from "./MyDatePicker";
import { useState } from "react";

export const TicketBooking = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { moviedata } = location.state;
  const showTimings = ["5:45 p.m.", "6:45 p.m.", "8:00 p.m.", "9:30 p.m."];
  console.log("moviedata", moviedata);
  function NavToFinalBooking() {
    nav("/finalbooking", {
      state: {
        moviedata: moviedata,
        selectedSeats: selectedSeats,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
      },
    });
  }

  const [selectedSeats, setSelectedSeats] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [selectedTime, setSelectedTime] = useState("5:45 p.m.");

  // const [ticketDetails, setTicketDetails] = useState([
  //   {
  //     selectedDate: "",
  //     selectedTime: "",
  //     selectedSeats: "1",
  //   },
  // ]);

  const handleSeatChange = (e) => {
    setSelectedSeats(e.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="pt-48">
        <div className="w-[100rem] h-96 ml-[45rem] mt-[5rem] flex border border-gray-500">
          <div className="w-3/10 border flex justify-center items-center border-gray-500">
            <img
              src={moviedata.Images}
              alt="movie"
              className="w-[36rem] h-[24rem]"
            />
          </div>
          <div className="w-7/10">
            <div className="w-full h-1/3 flex border  border-gray-500">
              <div className="w-4/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                Select Date
              </div>

              <div className="w-6/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                <MyDatePicker onDateChange={handleDateChange} />
              </div>
            </div>
            <div className="w-full h-1/3 flex border  border-gray-500">
              <div className="w-4/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                Available Show Timings
              </div>

              <div className="w-6/10 border border-gray-500  flex justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  {showTimings.map((time, index) => (
                    <div
                      onClick={() => handleTimeChange(time)}
                      key={index}
                      className={`   ${
                        selectedTime === time
                          ? "bg-orange-500 text-white"
                          : "bg-white text-black border-gray-300"
                      } px-4 py-2 bg-gray-100 border border-gray-500 rounded-md text-xl font-bold cursor-pointer transition-colors duration-300`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-1/3 flex border  border-gray-500">
              <div className="w-4/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                Choose Number Of Seats
              </div>

              <div className="w-6/10 border border-gray-500 font-roboto text-4xl flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <select
                    id="seat-selection"
                    value={selectedSeats}
                    onChange={handleSeatChange}
                    className=" px-4 py-2 border text-center border-gray-500 rounded-md text-xl font-bold cursor-pointer bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
