import React, { useState } from "react";
import { forgot } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export const ForgotComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleVerifyUsername = () => {
    const storedUsername = JSON.parse(localStorage.getItem("user"));
    if (storedUsername && storedUsername.username === username) {
      setIsVerified(true);
      setMessage("Username verified. You can reset your password.");
    } else {
      setMessage("Username not found.");
    }
  };

  const handleResetPassword = () => {
    if (isVerified) {
      dispatch(forgot({ username, password }));
      setMessage("Password reset successfully!");
      setPassword("");
    }
  };

  return (
    <div className="bg-zinc-200 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg  shadow-lg shadow-black/35 pl-10 w-[300px] h-[350px] flex flex-col justify-start ">
        <div>
          <p className="font-semibold mt-6 text-2xl top-0 tracking-wide ">
            Forgot Password
          </p>
        </div>
        {!isVerified ? (
          <div className="mr-5 mt-4">
            <input
              className="outline-none h-10 px-5 border border-sm w-full"
              type="text"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="mt-4 text-xl" onClick={handleVerifyUsername}>
              Verify Username
            </button>
          </div>
        ) : (
          <div className="mt-4 mr-5">
            <input
              className="outline-none h-10 px-5 border border-sm w-full"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mr-5 mt-4">
              <button
                onClick={handleResetPassword}
                className="bg-[#FFA2A0] w-full h-10 rounded-full text-white font-semibold hover:bg-red-400 duration-300"
              >
                Reset Password
              </button>
            </div>
          </div>
        )}
        {message && <p className="text-xl mt-4"> {message}</p>}
      </div>
    </div>
  );
};
