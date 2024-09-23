import React from "react";
import QRCode from "../images/QRCode.png";
import { useLocation } from "react-router-dom";
import { BsQrCode } from "react-icons/bs";

export const FinalBooking = () => {
  const location = useLocation();
  const { moviedata, selectedSeats, selectedDate, selectedTime } =
    location.state;

  const ticketPrice = 600;

  return (
    <div className="relative w-[50rem] h-[72rem] border border-gray-500 mt-[12rem] ml-[65rem] rounded-lg">
      <h1 className="text-4xl text-center mt-[1rem]">Your Ticket</h1>
      <div className="flex w-full h-[35rem]">
        <div className="w-6/10">
          <img
            src={moviedata.Images}
            alt="Movie"
            className="absolute left-4 mt-[2rem] w-1/2  h-[30rem] rounded-3xl"
          />
        </div>
        <div className="w-4/10 mt-[3rem]">
          <div className=" text-4xl font-bold flex justify-start items-center mt-[5rem]">
            {moviedata.Title} <br />
            (IMAX) (U/A)
          </div>
          <div className="text-3xl flex justify-start items-center mt-[1.5rem]">
            {moviedata.Language} , IMAX 3D
          </div>
          <div className="text-3xl flex justify-start items-center mt-[1.5rem]">
            {selectedDate} | {selectedTime}
          </div>
          <div className="text-3xl flex justify-start items-center mt-[1.5rem]">
            PVR: Lulu, Trivandrum
          </div>
        </div>
      </div>

      <div className=" flex  ml-[1.5rem] mt-[1rem] w-[47rem] h-[26rem] rounded-2xl bg-[#f2f1f1] relative">
        <div className="w-5/10 flex justify-center items-center">
          <BsQrCode size={300} />
        </div>
        <div className="w-5/10 ">
          <div className=" text-4xl flex justify-center items-center mt-[5rem]">
            <div>{selectedSeats} Ticket(s)</div>
          </div>
          <div className="text-5xl font-bold flex justify-center items-center mt-[1.5rem]">
            AUDI 01
          </div>
          <div className="text-4xl flex justify-center items-center mt-[1.5rem]">
            CL-F6
          </div>
          <div className="text-3xl flex justify-center items-center mt-[1.5rem]">
            BOOKING ID : TLAHEAU
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[2rem]">
        <div className="text-3xl ml-[2rem] ">Total Amount</div>
        <div className="text-3xl mr-[2rem]">
          <div> Rs.{selectedSeats * ticketPrice}</div>
        </div>
      </div>
    </div>
  );
};
