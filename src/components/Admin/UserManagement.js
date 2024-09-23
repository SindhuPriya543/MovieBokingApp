import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blockUser } from "../../redux/reducers/adminSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);

  const handleBlockUser = (userId) => {
    dispatch(blockUser(userId));
  };

  return (
    <div className="mt-4 w-[100rem]">
      <h3 className="text-xl font-semibold">User Management</h3>
      <table className="w-[100rem] bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Username</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4">{user.username}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleBlockUser(user.id)}
                  className="text-red-500 hover:underline"
                >
                  Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
