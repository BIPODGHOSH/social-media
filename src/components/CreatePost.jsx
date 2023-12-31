import React, { useContext, useRef } from "react";
import { Posts } from "../store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(Posts);
  const imageUrlElement = useRef();
  const titleElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = imageUrlElement.current.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const title = titleElement.current.value;
      const postId = Date.now();
      const userId = (Math.random() + 1).toString(36).substring(7);
      const postReaction = 0;
      const tags = ["react", "javaScript", "html", "css"];
      imageUrlElement.current.value = "";
      titleElement.current.value = "";

      addPost(postId, imageUrl, title, userId, postReaction, tags);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Add a caption for your post"
            ref={titleElement}
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload an Image:
          </label>
          <input
            type="file"
            id="image"
            className="form-control"
            accept="image/*"
            ref={imageUrlElement}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
