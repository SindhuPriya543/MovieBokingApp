import React from "react";
import cineflix_logo from "../images/cineflix_logo.png";
import user_logo from "../images/user_logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full h-28 bg-[#FFA2A0] bg-opacity-75">
      <div className="container mx-auto mt-5 flex items-center">
        <div>
          <img src={cineflix_logo} className="w-[14rem]" />
        </div>
        <div className="ml-auto flex items-center">
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
            />
          </div>
        </div>
      </div>
    </header>
  );
};
