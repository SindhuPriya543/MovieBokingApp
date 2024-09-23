import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/reducers/adminSlice";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const handlePasswordChange = () => {
    if (newPassword) {
      dispatch(changePassword(newPassword));
      setNewPassword("");
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Change Admin Password</h3>
      <div className="mt-2">
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handlePasswordChange}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default PasswordReset;
