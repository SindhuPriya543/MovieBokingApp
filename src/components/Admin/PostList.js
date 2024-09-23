import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideUserPost } from "../../redux/reducers/adminSlice";

const PostList = () => {
  const users = useSelector((state) => state.admin.users);
  const dispatch = useDispatch();

  const handleHidePost = (postId) => {
    dispatch(hideUserPost(postId));
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">User Posts</h3>
      {users.map((user) =>
        user.posts.map(
          (post) =>
            !post.hidden && (
              <div
                key={post.id}
                className="bg-white p-4 shadow-md rounded-md mb-4"
              >
                <p>{post.message}</p>
                <button
                  onClick={() => handleHidePost(post.id)}
                  className="text-red-500 hover:underline"
                >
                  Hide Post
                </button>
              </div>
            )
        )
      )}
    </div>
  );
};

export default PostList;
