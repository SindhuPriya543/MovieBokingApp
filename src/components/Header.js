import React from "react";
import cineflix_logo from "../images/cineflix_logo.png";
import user_logo from "../images/user_logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const nav = useNavigate();
  const navToLoginPage = () => {
    nav("/signin");
  };
  return (
    <header className="fixed top-0 w-full h-28 bg-[#FFA2A0] bg-opacity-75">
      <div className="  mt-5 mx-[4rem] flex justify-center">
        <div>
          <img src={cineflix_logo} className="w-[14rem]" />
        </div>
        <div className="ml-auto mr-[15rem] mt-[0.5rem] flex justify-between">
          <input
            type="text"
            placeholder="Search"
            className="w-[22rem] h-[3.5rem] bg-neutral-400 bg-opacity-75 px-[1.5rem] py-1 
            outline-none border-none rounded-[70px] placeholder-white placeholder:text-[1.35rem] "
          />

          <div className="w-[3.5rem] h-[3.5rem] ml-4">
            <img
              src={user_logo}
              className="rounded-full cursor-pointer w-full h-full"
              onClick={navToLoginPage}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
