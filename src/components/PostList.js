import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hidePost } from "../redux/reducers/postsReducer";

const PostList = ({ currentUserId }) => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const handleHidePost = (postId) => {
    dispatch(hidePost(postId)); // Dispatch action to hide the post
  };

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        posts.map(
          (post) =>
            !post.hidden && (
              <div
                key={post.id}
                className="bg-white p-4 shadow-md rounded-md mb-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-semibold">{post.message}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-24 h-24 object-cover mt-2"
                      />
                    )}
                  </div>
                  {post.userId === currentUserId && (
                    <button
                      onClick={() => handleHidePost(post.id)}
                      className="text-red-500 hover:text-red-600 ml-4"
                    >
                      Hide Post
                    </button>
                  )}
                </div>
              </div>
            )
        )
      )}
    </div>
  );
};

export default PostList;
