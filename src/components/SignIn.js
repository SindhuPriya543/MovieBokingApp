import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, isAdmin, error } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  if (isAuthenticated || isAdmin) {
    navigate("/");
  }

  return (
    <div className="bg-zinc-200 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg shadow-black/35 pl-10 w-[350px] h-96 flex flex-col justify-center ">
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <p className="font-semibold text-2xl tracking-wide ">LOGIN</p>
          </div>
          <div className="mr-5">
            <p className="text-zinc-600 text-semibold">Username</p>
            <input
              className="outline-none h-10 px-5 border border-sm w-full"
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mr-5">
            <p>Password</p>
            <input
              className="outline-none h-10 px-5 border border-sm w-full"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-5 mt-2">
            <input type="checkbox" />
            <p> Remember me?</p>
          </div>
          <div className="mr-5">
            <button className="bg-[#FFA2A0] w-full h-10 rounded-full text-white font-semibold hover:bg-red-400 duration-300">
              LOGIN
            </button>
            <p className="text-end mt-1 hover:text-blue-600">
              <Link to="/forgot">Forgot Password ?</Link>
            </p>
          </div>
          <div>
            <p className="text-zinc-400">
              Not Registered ?
              <span className="text-black font-bold underline underline-offset-2 ml-1">
                <Link to="/signup"> SignUp </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
