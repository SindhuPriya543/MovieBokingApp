import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userReducer"; // Adjust import based on your structure
import { useNavigate } from "react-router-dom";

const SidePanel = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
    navigate("/signin");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-64 p-4">
        <h2 className="text-2xl font-bold">User Menu</h2>
        <button
          onClick={() => {
            navigate("/profile");
            onClose();
          }}
          className="block mt-[1.5rem] text-xl"
        >
          Manage Profile
        </button>

        <button
          onClick={handleLogout}
          className="block mt-[1.5rem] text-xl text-red-600"
        >
          Logout
        </button>
        <button
          onClick={onClose}
          className="block mt-[1.5rem] text-xl text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
