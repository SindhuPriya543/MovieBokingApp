import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../../redux/reducers/adminSlice";

const ProfileManagement = () => {
  const dispatch = useDispatch();
  const adminUsername = useSelector((state) => state.admin.adminUsername);

  const [newUsername, setNewUsername] = useState(adminUsername);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdateProfile = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    dispatch(changePassword(newPassword)); // Update the admin password in the Redux store

    // Here, you can add logic to update the username if needed
    // Currently, we're only changing the password

    setError("");
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[100rem]">
      <h2 className="text-2xl font-bold mb-4">Manage Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="border p-2 w-full rounded"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileManagement;
