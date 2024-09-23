import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/reducers/postsReducer";

const PostForm = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message || image) {
      const newPost = {
        id: Date.now(),
        message,
        image: image ? URL.createObjectURL(image) : null,
        userId: 1, // Assuming the current user ID is 1
      };
      dispatch(addPost(newPost)); // Dispatch the action to add a post
      setMessage("");
      setImage(null);
    }
  };

  return (
    <form className="bg-white p-4 shadow-md rounded-md" onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="block mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
