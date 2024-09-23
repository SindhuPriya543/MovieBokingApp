import React from "react";
import UserManagement from "./UserManagement";
import PasswordReset from "./PasswordReset";
import PostList from "./PostList";
import ProfileManagement from "./ProfileManagement";

export const AdminDashboard = () => {
  return (
    <div className=" mt-[20rem] ml-[35rem]">
      <h2 className="text-2xl font-bold ml-[50rem]">Admin Dashboard</h2>
      <UserManagement />
      <PasswordReset />
      <ProfileManagement />
      <PostList />
    </div>
  );
};
