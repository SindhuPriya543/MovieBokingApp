import React, { useState } from "react";
import cineflix_logo from "../images/cineflix_logo.png";
import user_logo from "../images/user_logo.png";
import { useNavigate } from "react-router-dom";
import SidePanel from "./SidePanel";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Header = () => {
  const nav = useNavigate();
  const navToLoginPage = () => {
    nav("/signin");
  };

  const [isPanelOpen, setPanelOpen] = useState(false);

  const handleIconClick = () => {
    setPanelOpen(!isPanelOpen);
  };

  const { isAuthenticated, isAdmin } = useSelector((state) => state.user);

  return (
    <header className="fixed top-0 w-full h-28 bg-[#FFA2A0] bg-opacity-75">
      <div className="  mt-5 mx-[4rem] flex justify-center">
        <div>
          <img src={cineflix_logo} className="w-[14rem]" />
        </div>
        <nav className="container mx-auto flex justify-between items-center py-4">
          {/* Navbar */}
          <ul className="flex space-x-6">
            <li className="text-2xl font-semibold">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="text-2xl font-semibold">
              <Link to="/latestmovies" className="hover:text-gray-400">
                Movies
              </Link>
            </li>
            <li className="text-2xl font-semibold">
              <Link to="/nearbyevents" className="hover:text-gray-400">
                Events
              </Link>
            </li>
            <li className="text-2xl font-semibold">
              <Link to="/posts" className="hover:text-gray-400">
                Posts
              </Link>
            </li>
            <li className="text-2xl font-semibold">
              {isAdmin && ( // Show admin options only if authenticated
                <>
                  <Link to="/admin" className="hover:text-gray-400">
                    Admin
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav>
        <div className="ml-auto mr-[15rem] mt-[0.5rem] flex justify-between">
          <input
            type="text"
            placeholder="Search"
            className="w-[22rem] h-[3.5rem] bg-neutral-400 bg-opacity-75 px-[1.5rem] py-1 
            outline-none border-none rounded-[70px] placeholder-white placeholder:text-[1.35rem] "
          />
          {isAdmin || isAuthenticated ? (
            <div>
              <div className="w-[3.5rem] h-[3.5rem] ml-4">
                <img
                  src={user_logo}
                  className="rounded-full cursor-pointer w-full h-full"
                  onClick={handleIconClick}
                />
              </div>
              <SidePanel
                isOpen={isPanelOpen}
                onClose={() => setPanelOpen(false)}
              />
            </div>
          ) : (
            <div>
              <div className="w-[3.5rem] h-[3.5rem] ml-4">
                <button
                  onClick={navToLoginPage}
                  className="rounded-lg bg-[#58CCC9] p-4 text-2xl w-[14rem] font-semibold"
                >
                  Login / Register
                </button>
              </div>
              <SidePanel
                isOpen={isPanelOpen}
                onClose={() => setPanelOpen(false)}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
