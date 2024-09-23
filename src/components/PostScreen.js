import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

export const PostScreen = () => {
  const currentUserId = 1; // Assuming the logged-in user is user with ID 1

  return (
    <div className="container mx-auto p-4 pt-[30rem]">
      <PostForm />
      <PostList currentUserId={currentUserId} />
    </div>
  );
};
