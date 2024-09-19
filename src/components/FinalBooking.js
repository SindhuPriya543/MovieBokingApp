import React from "react";
import QRCode from "../images/QRCode.png";
import goat from "../images/goat.png";

export const FinalBooking = () => {
  return (
    <div className="relative w-[50rem] h-[75rem] border border-black mt-[12rem] ml-[55rem]">
      <h1 className="text-4xl text-center mt-[2rem]">Your Ticket</h1>
      <div className="flex w-full h-[35rem]">
        <div className="w-5/10">
          <img
            src={goat}
            className="absolute left-4 mt-[4rem] w-1/2  h-[32rem] rounded-3xl"
          />
        </div>
        <div className="w-5/10">
          <div className=" text-4xl flex justify-center items-center mt-[5rem]">
            Name Of movie
          </div>
          <div className="text-5xl font-bold flex justify-center items-center mt-[1.5rem]">
            {" "}
            Language
          </div>
          <div className="text-4xl flex justify-center items-center mt-[1.5rem]">
            Date & Time
          </div>
          <div className="text-3xl flex justify-center items-center mt-[1.5rem]">
            Theatre Name
          </div>
        </div>
      </div>

      <div className=" flex  ml-[1.5rem] mt-[2rem] w-[47rem] h-[26rem] rounded-2xl bg-[#f2f1f1] relative">
        <div className="w-5/10">
          <img
            src={QRCode}
            className="absolute top-[4rem] left-[2rem] h-[18rem]"
          />
        </div>
        <div className="w-5/10 ">
          <div className=" text-4xl flex justify-center items-center mt-[5rem]">
            1 Ticket(s)
          </div>
          <div className="text-5xl font-bold flex justify-center items-center mt-[1.5rem]">
            {" "}
            AUDI 01
          </div>
          <div className="text-4xl flex justify-center items-center mt-[1.5rem]">
            CL-F6
          </div>
          <div className="text-3xl flex justify-center items-center mt-[1.5rem]">
            BOOKING ID : TLAHEAU{" "}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[2rem]">
        <div className="text-3xl ml-[2rem] ">Total Amount</div>
        <div className="text-3xl mr-[2rem]">Rs.600</div>
      </div>
    </div>
  );
};
