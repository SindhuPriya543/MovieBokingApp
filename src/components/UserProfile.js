import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, clearProfile } from "../redux/reducers/profileReducer";
import { useNavigate } from "react-router-dom";

export const UserProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
    setAddress(profile.address);
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setProfile({ name, email, phone, address }));
    navigate("/");
  };

  const handleClear = () => {
    dispatch(clearProfile());
  };

  return (
    <div className="pt-28">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Clear Profile
          </button>
        </form>
      </div>
    </div>
  );
};
